exports.send_prize = function (txid, prize_amount) {

  console.log('txid : ' + txid)
  console.log('prize_amount : ' + prize_amount)

  const BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
  const BITBOX = new BITBOXCli({
    restURL: 'https://trest.bitcoin.com/v1/'
  })

  mnemonic = "century pipe brass apart honey able language give arctic jazz swap robot shoot drive cute rhythm edge grow race fiber lens amount better void";

  // root seed buffer
  let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);

  // master HDNode
  let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, 'testnet');

  // HDNode of BIP44 account
  let account = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");

  // derive the HDNode
  let node = BITBOX.HDNode.derivePath(account, "432/123");

  // HDNode to cashAddress
  let cashAddress = BITBOX.HDNode.toCashAddress(node);
  console.log('cashAddreses : ' + cashAddress);

  // create instance of Transaction Builder class
  let transactionBuilder = new BITBOX.TransactionBuilder('testnet');


  // set original amount, txid and vout
  let originalAmount = prize_amount;
  //let txid = 'af2804bba5538a162d68f064d7fd2baa50036b9f6a37debf745f84f12864efcc';
  let vout = 0;

  // add input
  transactionBuilder.addInput(txid, vout);

  // set fee and send amount
  let fee = 250;
  let sendAmount = originalAmount + fee;

  // encode custom script
  let script = BITBOX.Script.encode([
    Buffer.from("BOX", 'ascii'),
    BITBOX.Script.opcodes.OP_CAT,
    Buffer.from("BITBOX", 'ascii'),
    BITBOX.Script.opcodes.OP_EQUAL
  ])

  // hash160 script buffer
  let p2sh_hash160 = BITBOX.Crypto.hash160(script)

  // encode hash160 as P2SH output
  let scriptPubKey = BITBOX.Script.scriptHash.output.encode(p2sh_hash160)

  // derive address from P2SH output
  let address = BITBOX.Address.fromOutputScript(scriptPubKey, 'testnet')

  // add output
  transactionBuilder.addOutput(address, sendAmount);

  // HDNode to keypair
  let key = BITBOX.HDNode.toKeyPair(node);

  // empty redeemScript var
  let redeemScript

  // sign input
  transactionBuilder.sign(0, key, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount)

  // build to hex
  let hex = transactionBuilder.build().toHex()
  console.log(hex)

  // POST to BCH network
  BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => { console.log(result); }, (err) => { console.log(err); });
  // 901dc9549555e4a7e821c3504883eabe14d808e6e321c06666904b6ba68aca6d
}