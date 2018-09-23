var express = require('express');
var p2sh = require("../p2sh-output.js");
var router = express.Router();

var lottery1 = [
    ['bchtest:qqgzzwackd880qmn7z6j3wze8zljf3k37qwyh7gqwh', 1, ''],
    ['bchtest:qqv7zem6ltwvhm3y54wc9auyv9hdctpsavxvnvfy0n', 1, ''],
    ['bchtest:qzp4s8eujfau0mknq5j3s6a8mungwv3zrcetc9qwz2', 1, ''],
    ['bchtest:qr4d04uw447gfm2eq3lw4yjr3s6gjncff5hlewp929', 1, ''],
    ['bchtest:qqg99jw7y7wf4ydvpuq8l27wu6ak9426lq8cyk2f8a', 1, ''],
    ['bchtest:qz28flxn5cd4cpe5hux6879rekzj9d8essc8df78k0', 1, ''],
    ['bchtest:qp3y8dv2m7w9hx9alk6ae0s9zgfa27drcvnuuse22l', 1, ''],
    ['bchtest:qqpdduxw0ln7jassd8648dtnlzlkshmhygrkkdjcyk', 1, ''],
    ['bchtest:qpgg5ce6f85wkn4r7qvnf57523we3dljkg49kxr3jx', 1, ''],
    ['bchtest:qr2ypysjphlya4ptm2auxl88nvj3dvrgegwslsdwjv', 1, ''],
    ['bchtest:qqcngnd9w7ptse83k8vjy9guqjrsgg9a7ysfdl6eqg', 1, ''],
    ['bchtest:qp4aadqpxl4z5ct05cy7r2x9l9gl65zp5qjt90rqh0', 1, ''],
    ['bchtest:qzjyr9k4um26musd0gwzqanpajf2n9fah59zzkt79w', 1, ''],
    ['bchtest:qp0nreg5l2smhe2nrhnjdy5ru22trm423ye99tjehj', 1, ''],
    ['bchtest:qz9y7fn8693lgswvgyx78ycgsyfjldalqv6fl0wc7a', 1, ''],
    ['bchtest:qqs6k5xcjxrdsd7c9jqdxq5dsn889vdv9v23w273d9', 1, ''],
    ['bchtest:qrehchl2hpgg6wxa8z2x6tggzresmhmumu6g9xzqa8', 1, ''],
    ['bchtest:qruyke0m63retg2ffhmt9uhezqnet9qkygsp2h82j8', 1, ''],
    ['bchtest:qr0jctp69lskutm2xcg2vk2fkh27l7tqzq974m75yv', 1, ''],
    ['bchtest:qqzg73anhykf6ymevctrcfjwnk06k5f9gvxxlse2ly', 1, ''],
    ['bchtest:qru3d2y22lmu9ywgslanuz5t5am7va7lsy4x6uye72', 1, ''],
    ['bchtest:qz8lkcejhq8w93nuqpsjah7zqeejtx0p9s0xlu929h', 1, ''],
    ['bchtest:qr77zdtu0tzvup6c9gqqlpm7p6xfh58a8c2wlgs67y', 1, ''],
    ['bchtest:qpqwkrkk9x4vhcdx8rhgfygj2vw34pv5w57durh8xz', 1, ''],
    ['bchtest:qzvexxkgvjxv7a2gy2uu478cvmqh253p4c8lqjerqz', 1, ''],
    ['bchtest:qqpkq2q4e8vrukpwwk6q9068988tcv5lgvgv3yhv9v', 1, ''],
    ['bchtest:qrkj9qf4ts3xm228fej6q400e09dkh9v4u3pv69gks', 1, ''],
    ['bchtest:qqm9drlcmcg9thcwvw453nw0w46lxnr465n0jsrquv', 1, ''],
    ['bchtest:qzndsazzhypnn9zzmgvtweqpyfzcl583ruzzf7kfp4', 1, ''],
    ['bchtest:qrqh6jyrzpc2pheuqn6rrut5hrlv4euaksasvdzm4w', 1, ''],
    ['bchtest:qq7qd0z9l0fd0yr7qg30t70e4xhd7f0cj5j2e360ht', 1, ''],
    ['bchtest:qzpypdfl8k5rkk6t76lc55ntdsrp2fw9mc0hgj3apx', 1, ''],
    ['bchtest:qr87sha3v0rlna79sttq2w9wwhusslgrwqdyljy0l8', 1, ''],
    ['bchtest:qzx7jeyuxemdz7ua3uu8p4nqqg4wtl95ngsaakllt2', 1, ''],
    ['bchtest:qz00zwd2336xhygtepy7yxn9p9srzp75rq60y5adc6', 1, ''],
    ['bchtest:qzx964xs34unsa55shqlmz898nted7xuacjpj4fcxa', 1, ''],
    ['bchtest:qrk98njr4qwn24yycqfh26dx48lsn2dx3c4x8fumev', 1, ''],
    ['bchtest:qqzdhg9wndzrcry5k0w02vfefgz92kcmqqf2cfrst3', 1, ''],
    ['bchtest:qq7txzj50ecysyhldplrvfg066w0cww3hspjdf6y2r', 1, ''],
    ['bchtest:qp67x24aq467fcc7cz7jqvmtfn0h36xmectv7c07ws', 1, ''],
    ['bchtest:qrfv3wndka5kk08alq7u7qcqded8jxuakual4qrrfz', 1, ''],
    ['bchtest:qzc2jsd3qvy3p0wr6c5lkkmcnqjwycgj7s7kkepu7r', 1, ''],
    ['bchtest:qp24ggc3k2g69tcc0p5zey80cps3vn5g8qjssk70t2', 1, ''],
    ['bchtest:qpgm2ds5mqep07kswjrd6td0madjf8ve758wfdr5ys', 1, ''],
    ['bchtest:qp824lsynv8yhattww0sphtnlcwdedu945y5tkhk2k', 1, ''],
    ['bchtest:qrtskdaa4mp00nr2hyjtkjhttdx5wpgyruwhsuhvqn', 1, ''],
    ['bchtest:qrh70hfxkspaxf99tqnyxvldmwp4e45cgvrenr9u2q', 1, ''],
    ['bchtest:qzft6vgcx0arpp9fc9ljdh65gyj3t7v67c7pqe5r0s', 1, ''],
    ['bchtest:qqj8m7dausrnaups903d062460mkwnlmyq3c9lsgxk', 1, ''],
    ['bchtest:qprc873d6aj77yfqd6uh76rwqv9r6m73gyg66ey9xe', 1, ''],
    ['bchtest:qq9lvn790r4jkktekyvqrpxt4zh8qsrr8ufd7apqyh', 1, ''],
    ['bchtest:qz4seld556myhq2px3uxp0cfkl89cwcvkgd5m5u5az', 1, ''],
    ['bchtest:qzhgsevtgpfmeldw449dlpcct2vzreu4dghruge99t', 1, ''],
    ['bchtest:qzlhl9ck558daw6slvdgkht4k3agl6t8yu84ytryrr', 1, ''],
    ['bchtest:qpus22v6vhh3sn68l772g60pkd048h4vhsplsjgrvz', 1, ''],
    ['bchtest:qznzhx8qdka8ugxf2f09taeufrhtq3tngsuu3jfsrs', 1, ''],
    ['bchtest:qzr4j2ugj8pl5tazpatrqtt5pt3nt755ygd5xrpyrh', 1, ''],
    ['bchtest:qzxjlvhmdjcn2a3sgn8thx2mj2un283t3qs6xawkc8', 1, ''],
    ['bchtest:qzdc0wjwx6ja8aws9hhxlx7jqn90elwdryfq558cx2', 1, ''],
    ['bchtest:qp3tphqkaxrckhdn3eus8zyzxd8elaejzvax4ffsaw', 1, ''],
    ['bchtest:qp3uxyjw037k6xwfdeuqrjk4qvyz05d6jg50wxatsc', 1, ''],
    ['bchtest:qrcr27sqa8lqd2tsyd3xzq3xcemhtv4k9yh6ef0jl3', 1, ''],
    ['bchtest:qqwkmnk8j0fp484p055u52n76g39l94eu5m7dq76p9', 1, ''],
    ['bchtest:qr90wa86mgts2f0gzu9lgf3fe3h9l39wxykdxghlpm', 1, ''],
    ['bchtest:qp6dm4uk6nytfhtj702erv6emphyaygd6snppx7qv8', 1, ''],
    ['bchtest:qzakps966z2wrxvecu2nl08e5nqcqfxxp5hwqjcx6s', 1, ''],
    ['bchtest:qr2w46fw58ufjjayva2lwn6e6ar7xjlvsuy8zxjfm3', 1, ''],
    ['bchtest:qz5k033c6fhx7lc46w5fjymulrvh2zqsw5vupqyppd', 1, ''],
    ['bchtest:qzs6d5m3nna4agt0wam2eusxjpujjhnt05vw4uvhqd', 1, ''],
    ['bchtest:qpzjyu2h8fgd2u3umvrfsxz95v7c26f3nceql5f0hn', 1, ''],
    ['bchtest:qzvens0mrvphzw3y2h5z3zpnpv6cje343q2s0g8xd8', 1, ''],
    ['bchtest:qqtz2q4smvz5m47mvwyx7fljfd7kzel99sjfqmn7f7', 1, ''],
    ['bchtest:qrp3qw7mlksl3glglgs44y6q66lq0mdu8qa47wt5cc', 1, ''],
    ['bchtest:qp8v42yhceppgc4mqrrhfemrl8vzr4jq3uv50d63hg', 1, ''],
    ['bchtest:qrah3le9zl8mewymeehdcphg94dhchvw4ujemzrdu8', 1, ''],
    ['bchtest:qqw8kp2uhhxl2cwz307mhr3jlzwgt4dpysn564yavg', 1, ''],
    ['bchtest:qqaegmsskdknrv7hx0kh5m8748sl5qutryskk6fcdp', 1, ''],
    ['bchtest:qrexv5uemnz0l894fx3sy07es0yrd7aa25jml80cm8', 1, ''],
    ['bchtest:qr2a0yua8yaj4s5e9qrcded5w98xvs8dxqmlxz9x55', 1, ''],
    ['bchtest:qpk8mehfe2yfh0ecz7mv72lz4f7qe8g0asw9a2rcqf', 1, ''],
    ['bchtest:qq2wg7nc67azp75axj7jlkgwkdkejnse65kjq9kusw', 1, ''],
    ['bchtest:qp060v7usahv02c6xhpxlk563wsh887paqlg0qcsqy', 1, ''],
    ['bchtest:qzlj4u9qd93k0qu56jewcg02sp3r9zex5gzcv3rm6d', 1, ''],
    ['bchtest:qz8vv77mlc53vm5zxt7ul5spgq92hfe39qc0ylnl0a', 1, ''],
    ['bchtest:qzk2xftkyt8fn0cv2c8emjrtv9yfr5sg3udzph8fd6', 1, ''],
    ['bchtest:qrtpa409vlaesrs444p06wkjhj0s6tfks5cneq58u3', 1, ''],
    ['bchtest:qz0usf6zkfg9cuzaax5kxh0mpc3dgkqnhsxs2458ea', 1, ''],
    ['bchtest:qzn8lp77hcwas69g2zxaz756wupdf2sawcf2mm4dw7', 1, ''],
    ['bchtest:qzq4rj4nc64cf2vf979rh8uujquluxc7qcxvnf2n7d', 1, ''],
    ['bchtest:qrkg4cq2cs2awxfwnspsf4fl72cq59rz7vydmah8m4', 1, ''],
    ['bchtest:qqxuff5au89ryvr6ur626qckl3jy97dncy9v4vzz6x', 1, ''],
    ['bchtest:qqnhz4atrjdfc9dnlehwujku07xg2psd4s3edftvfy', 1, ''],
    ['bchtest:qqsj53f03fatl6r09zwzpwwgx397xfsmgqy6p0zth4', 1, ''],
    ['bchtest:qr3ddf97j94jyzwysqxg3x370dv9fjg6vv7c2ucsfr', 1, ''],
    ['bchtest:qr9x0gu9guw28mqtrfjmun3gfscxug2jps7slzj7ef', 1, ''],
    ['bchtest:qqdnmmuts52u6p8ems4vthlswhdnxj9qmq9h8hh2jd', 1, ''],
    ['bchtest:qz96qv3ruxyz3zrhgl2wqzfl0h2q8xyq7ga0q5gatz', 1, ''],
    ['bchtest:qr5swjnw8fxwufeh0kmmujzekm05gvlyky8lf3fyjv', 1, ''],
    ['bchtest:qpsd0mgz2ejvm9cfs4n9qa23cxglplatwyns8tq80k', 1, '']
];

var lottery2 = [
    ['bchtest:qqsgp0xa2rfxk8pf0ag7ux6228vfssk6fueptvy98j', 2, ''],
    ['bchtest:qqv6xpjcdwk8k6p6af5xwg5gzeu5ww0e0g3p65urlv', 2, ''],
    ['bchtest:qqtf7klzlanugefx66zm85yk9akcxdz8eu8jhqqtw3', 2, ''],
    ['bchtest:qzy7w4g63ps0e6xca82t7nj5mkeswarc2slgr7e9n2', 2, ''],
    ['bchtest:qzazswl9fx88s88ta0urlez2pclcql7t2gvh0wmkhj', 2, ''],
    ['bchtest:qr00gutzjjf6js82mvm6nnpq42spyhr5dqsduraz33', 2, ''],
    ['bchtest:qput533gdqmq6c52cfwzswryz08ar0su3cgul3lgm4', 2, ''],
    ['bchtest:qzjdc4q3yzwvknw4p4dpajlpad7msskmm5t70arlpv', 2, ''],
    ['bchtest:qztr4dp32zvv5f8sg3elwld2nfwepvju9su932nf48', 2, ''],
    ['bchtest:qqldd6872uhlnp3rec8vpa7k0d6uadx3kcekq0eq86', 2, ''],
    ['bchtest:qz6uutr279hff0u3ct0p5srjfqqyjpfdhvmq4lzsp2', 2, ''],
    ['bchtest:qr2n3tj0wxgdq0fwrzcfxw3m5jfgq8fa0sgluvtr88', 2, ''],
    ['bchtest:qppurg60swnrzt7pvj9a3sezwkjpy8aj2yfe6hksnw', 2, ''],
    ['bchtest:qzpt0ksmxamxpa3g2nwt3cd7k09nsjwcg5hn87q344', 2, ''],
    ['bchtest:qpp5u4flh9qa7qe98u4vkwggklklu37n7q7mdj4m8s', 2, ''],
    ['bchtest:qzgl9wrhkgejat36lplef7p6p04qyfd6scsfln4d05', 2, ''],
    ['bchtest:qptwefvpzdejy6c9n3flc7dptdej7k9kzgy4xeuw52', 2, ''],
    ['bchtest:qqq98rxm2t44a0z4q7364ejvemyupqwm7s9phtl8qt', 2, ''],
    ['bchtest:qzjtzv59rh209afv5a8mwu6kwvxxcwsdqvrvwg9ke9', 2, ''],
    ['bchtest:qz0k4vkuvu5l2c7jzgd8k975sr8m09xczch30gy2v0', 2, ''],
    ['bchtest:qzuuweygeamq725ry8nw0ww63667crar0qxs06twlm', 2, ''],
    ['bchtest:qr65cqzw03mgg0qrhc3phmhhxlyrys79nclexkds8f', 2, ''],
    ['bchtest:qz8hsps8crdhdhlsa3e6nyehr8mehvspjvlvm8rgq7', 2, ''],
    ['bchtest:qq0nmy5z6l3depygwy2pj94rc8eega2ucstv47c6ka', 2, ''],
    ['bchtest:qz868zxgdhwm628n0xrpm2gtnqah59ct7cejwekrun', 2, ''],
    ['bchtest:qq8rn078pndm5cfzakwk3x2x043l5ek09g976ku8z0', 2, ''],
    ['bchtest:qrfsgtymu5cacemvf6k7s9la9fk54c4m2qyg5m9u8v', 2, ''],
    ['bchtest:qpdm9yl8s8vskrm79zqf4mgk2n5w2ekm3c7897728y', 2, ''],
    ['bchtest:qqq57htxly9xf0rs2kzpskene6msr7zh95kxd6gqtc', 2, ''],
    ['bchtest:qq5y7ayscvh59eet376m0y3t6k352q0q2ctj3n5uyp', 2, ''],
    ['bchtest:qz4dmdnte025urwk8vs5zjrs2zqg9jm9eq3e95dq55', 2, ''],
    ['bchtest:qpy888pnk5x3z8fyavdgqnwfk0x4yw5ykckdf3xuhw', 2, ''],
    ['bchtest:qqc9kzkqdpvqnwz032gh006gwa4emh7r6qfgrlysfz', 2, ''],
    ['bchtest:qqgl25pet90h3l8unnndlw4ceg28tsnqeqtkc5a3we', 2, ''],
    ['bchtest:qzlpgmd59yltpelgmh0wnk4zghdy68puvvzekyw7pw', 2, ''],
    ['bchtest:qpzupkj9kcprgldq480xsf0u3u9mxd2v7czyhd2j35', 2, ''],
    ['bchtest:qpu7w8933ne6x8ur02gjpc5sncrak6mtqqj3ckj65k', 2, ''],
    ['bchtest:qzxzd8v3gcwjdt4guy69su8ajn56qzss0c59dntm0s', 2, ''],
    ['bchtest:qqnz0mj5jwtxxcdt04d6yrsx9d5e43mzugf62sjz8v', 2, ''],
    ['bchtest:qrlwe7jdhryk4wjy6v78jx85zy6hh7l3lgarhflsxv', 2, ''],
    ['bchtest:qrnc9qlyn69t3m8w5cv3zfgm3ef3ed2uy5dhpe89ft', 2, ''],
    ['bchtest:qzrp0sdtwk4x5r8hmdmcqjcrhq6gv35gu55kkvznuj', 2, ''],
    ['bchtest:qzn5pcn9cyrstus3wh20pyjwcxzydal9k5dk72hsl2', 2, ''],
    ['bchtest:qq06g2nu8v0cg5z3yje7rvjl3xex0tdvxsncdvk8zg', 2, ''],
    ['bchtest:qzxaxcq4cvkl2sn9mvy83c7qus294akdmgcpaxeg0d', 2, ''],
    ['bchtest:qprwundfnf9xnyvy7z2qtd7wzkkntuacagzyp72lgu', 2, ''],
    ['bchtest:qzlj28gjnf582pvnjd50vkccvqmrzzcagyvrk8uyww', 2, ''],
    ['bchtest:qz2p834dkp7qlesg4cj25m7p2ls5424rqy25h44r85', 2, ''],
    ['bchtest:qqxuh5v9dy4nszuqcs2r72rjmy0z8422r50kh9c3m3', 2, ''],
    ['bchtest:qrk8xcl9nsc437f43ql08533uzm0jlqj758pasuekk', 2, ''],
    ['bchtest:qz9kjg88t3sqvw7ph55c3lsltdu8xxardymsmt4wuk', 2, ''],
    ['bchtest:qze8uhp946ej48s8e4zgkahy8rgkqadkf5j9nz6ykj', 2, ''],
    ['bchtest:qp27l5gunt3f6qp00x7edt9p720wwq72fcwf2k8lrd', 2, ''],
    ['bchtest:qrne9znv82aveynmpk9umlflgv7kuya3xc5ntlsskl', 2, ''],
    ['bchtest:qr8v43kua7frh06va0y3u8t2lks467hyvy3zyx0hd0', 2, ''],
    ['bchtest:qqfckd38j2nvqy2m05hvxy7u547js9u96uff804t05', 2, ''],
    ['bchtest:qp6l9tc0er3se0d9vhnltvun6d8faskh2ggfdzqejj', 2, ''],
    ['bchtest:qr5yrw9fk4dnugrykz6q8nlgda7l28sphs6zncp7n8', 2, ''],
    ['bchtest:qqlahlrymtfh0tyxql5epyn0zwyz30mnysxlglcpys', 2, ''],
    ['bchtest:qqx0tq3535n59ga4zrsddap5ma7s7qxn0sjsf9vght', 2, ''],
    ['bchtest:qqu4xgu7mp7efce0ug84rh83skqs8j3k9qkjufaruh', 2, ''],
    ['bchtest:qrpg5zxykphpy44nc9520pgrdm9tqs2y4q60d0k5kg', 2, ''],
    ['bchtest:qqn88mstjjtpdx9q70fw4xn4p67zwzk2rulvkvdtdj', 2, ''],
    ['bchtest:qzgmry9hlhal3vyd3lqmgnmr4rpkufk9wgs3xnqfd8', 2, ''],
    ['bchtest:qz69ju9efvkx0pw0h3j5yac3md9t0kxdrqqjm7m0g4', 2, ''],
    ['bchtest:qzcf0luwp7e0xgwhv678r7ammpkkphyupul6nthjdd', 2, ''],
    ['bchtest:qq44flhjsuavw8fxxfcntktzld36f43lm5dt2gz8fu', 2, ''],
    ['bchtest:qqlt5c58djk4m05pzsauqplmzp40eg4zqq0gm25cp5', 2, ''],
    ['bchtest:qrmracsaydcdhefw4k79y8lzkhslnytm5q5rmwlag3', 2, ''],
    ['bchtest:qzsx40pjje3czp6ulrh6kewzt7sxwtemcv0lu5ey86', 2, ''],
    ['bchtest:qpsctapvz0n2hdk6n9zr9hynalsu7kzydchqruzwq3', 2, ''],
    ['bchtest:qrhxsqch39wt9mtsdq3usv9mhawxhxyk6sjvdqnhzp', 2, ''],
    ['bchtest:qqwfstrt2ymcgdqrku7j0mfgm09mm0tskvmhd5zmy5', 2, ''],
    ['bchtest:qp0035n0s0kw3npa8n26tac2xdu2cy7trqdrceddg2', 2, ''],
    ['bchtest:qphw9ge5q37knjfk507vp44jxjgq466s3uk2a2300v', 2, ''],
    ['bchtest:qzuf9zg80j6dtdpn45e7ch722wqe5h4ewuqyc6xp9q', 2, ''],
    ['bchtest:qrrqncpl4phrhzsgsm3fjgn7hkted0c3qqw6974yvp', 2, ''],
    ['bchtest:qr0mayq8uuzry9z5nwqwuh2yn2x4m4j4r5lsxfls7l', 2, ''],
    ['bchtest:qpqsmld22jglqn0mlltr7dcmwpjv0w3mtsr90ewxxm', 2, ''],
    ['bchtest:qzsp7vvv5t2nq2cay0u7gymz7tztf5mw4uvz6fgxm2', 2, ''],
    ['bchtest:qq7ewprnxs7v478wes3fut2pfuajll09cuy44d73ht', 2, ''],
    ['bchtest:qrum435cm6uvc53gj56d7cg9v985ns93tgj23tcvnv', 2, ''],
    ['bchtest:qr35dca2le6rrspwvvvd58sy07qtz2rnrv33ptw4r3', 2, ''],
    ['bchtest:qqarvkgyyhw2xplnld9nsea2m89n24cpuvg8xqtmlw', 2, ''],
    ['bchtest:qrljw79ve29s0l2f03dh34dgt86v9k5qjg7vf4hqze', 2, ''],
    ['bchtest:qzxwq2akrj7qffggfaxva4uyxg5ugpj7rqczc2cwkv', 2, ''],
    ['bchtest:qpq59q2ajmvjg2lcnykxzl3tzerh9pxt0umjkm0q8q', 2, ''],
    ['bchtest:qzfdk38ajtsglkmzvj0acl4pw29p5jcylshgkrtvqp', 2, ''],
    ['bchtest:qr6kpqrages72ql8jz074gsm4hrh966chsdklqfqcx', 2, ''],
    ['bchtest:qrc4wuaa8vpvfygv4cgydxjmrvnptmqy3vsgf4a4k3', 2, ''],
    ['bchtest:qq6gw786gqvxh0v7ckqt3xwf6xwxy62egum05cy623', 2, ''],
    ['bchtest:qr0zlk2a3h43rg5kdd83g7fljpath28edyy708ddpa', 2, ''],
    ['bchtest:qrqhpw9p8rpgvqxv80hlh6c0wk7v2wqzgypdcj3e76', 2, ''],
    ['bchtest:qq65asnpwlm5xk6h6lh7c4x7hpyajky5sg337e9g5l', 2, ''],
    ['bchtest:qrelf8x4sldpej9rn6r2aav2w2l8s8qknurzcpfcz9', 2, ''],
    ['bchtest:qr943glceed5ep66z4ghxwlekezryjx235dw8s2843', 2, ''],
    ['bchtest:qrt3xxfrfhhrm335ez9v8v570u96e66ndvf6fa77g4', 2, ''],
    ['bchtest:qpvxewyz9whl9shfekwjzpr6h2sh2685fyruec0zlj', 2, ''],
    ['bchtest:qqesszdkjgh9599q0dn92cl92006lnl9fq35ryt0vh', 2, ''],
    ['bchtest:qznvad407z5muxrdv9y70mj5njlga2g5pcuftsjr87', 2, ''],
    ['bchtest:qpg2g3hyn5jw4gzcgjcqdm6fy9zfwadh95ex5mx2t0', 2, '']
];

var lotteries = [
    [1,'秋ジャンボ', '2018-09-01T09:00:00.000Z', '2018-09-23T23:59:59.999Z', '秋でジャンボな宝くじです。', 1000],
    [2,'年末ジャンボ', '2018-09-01T09:00:00.000Z', '2018-12-31T23:59:59.999Z', '年末でジャンボな宝くじです。', 1000]
];



function get_respons_for_lottery(lottery_id) {
    var data;
    var res = '[';
    if (lottery_id == 1) {
        data = lottery1;
    } else if (lottery_id == 2) {
        data = lottery2;
    } else {
        return '';
    }

    data.forEach(function (item, index) {
        res += '{\"address\":\"' + item[0] + '\",';
        if (item[3] == '') {
            res += '\"used\":\"false\"}';
        } else {
            res += '\"used\":\"true\"}'
        }
        if (index < 98) {
            res += ','
        }
    })
    res += ']';

    return res;
}

function buy(lottery_id, buy_addr, buyer_addr) {
    var data;
    if (lottery_id == '1') {
        data = lottery1;
    } else if (lottery_id == '2') {
        data = lottery2;
    } else {
        return false;
    }

    for(var i = 0; i < 100; i++) {
        if(data[i][0] == buy_addr) {
            if(data[i][2] == '') {
                data[i][2] = buyer_addr;
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}

async function get_hash() {
    const BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
    const BITBOX = new BITBOXCli({
    restURL: 'https://trest.bitcoin.com/v1/'
    });

    const hash = await BITBOX.Blockchain.getBestBlockHash()
    return hash;
}


router.get('/hoge', (req, res) => res.json({body: 1}))

function get_winner_addr() {

    return [
        ['9fd599887f9656c51eff5b3284895afc5cae7a79160110b35aa25c61d2a30070', 2000],
        ['9fd599887f9656c51eff5b3284895afc5cae7a79160110b35aa25c61d2a30070', 1000]
    ];
}

router.get('/send', function(req, res, next) {

    var winners = get_winner_addr();

    
    p2sh.send_prize(winners[0][0], winners[0][1]);
    //p2sh.send_prize(winners[1][0], winners[1][1]);

    var param = {'status':'ok'};
    res.send(param)

});

router.get('/test', function(req, res, next) {
    const hash = get_hash();

    console.log(hash);
    hash_sub = hash.substr(-8)
    hash_num = parseInt(hash_sub, 16) % 100000000;
    console.log(hash_num)

    var min_val = 99999999;
    var winner_addr = 'const';
    for(var i = 0; i < 100; i++) {
        addr_sub = lottery1[i][0].substr(-8);
        addr_num = parseInt(addr_sub, 36) % 100000000;
        
        if(min_val > Math.abs(hash_num - addr_num)) {
            winner_addr = lottery1[i][2];
            min_val = Math.abs(hash_num - addr_num);
        }
    }

    res.header('Content-Type', 'application/json; charset=utf-8')
    res.json({ body: { hash }})
});

router.get('/', function (req, res, next) {
    var param = {'data':[
        {
            'id': lotteries[0][0],
            'title': lotteries[0][1],
            'begin': lotteries[0][2],
            'end': lotteries[0][3],
            'describe': lotteries[0][4],
            'price':lotteries[0][5]
        },
        {
            'id': lotteries[1][0],
            'title': lotteries[1][1],
            'begin': lotteries[1][2],
            'end': lotteries[1][3],
            'price':lotteries[0][5]
        }
    ]};
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});


router.get('/:lottery_id', function (req, res, next) {
    var param = { 'lottery-id': req.params.lottery_id + ' not found!' };
    if (req.params.lottery_id == '1') {
        param = get_respons_for_lottery(1);
    } else if (req.params.lottery_id == '2') {
        param = get_respons_for_lottery(2);
    }
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});

router.get('/:lottery_id/endsoon', function (req, res, next) {
    var date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    date.setHours(date.getHours() + 9);
    var param = {"lotery_id":req.params.lottery_id};
    res.header('Content-Type', 'application/json; charset=utf-8')
    if(req.params.lottery_id == '1') {
        lotteries[0][3] = date.toISOString();
    } else if(req.params.lottery_id == '2') {
        lotteries[1][3] = date.toISOString();
    } else {
        res.status(400).send(param)
    }
    res.send(param);
});


router.post('/', function (req, res, next) {
    var lottery_id = req.body.lottery_id;
    var buy_addr = req.body.buy_addr;
    var buyer_addr = req.body.buyer_addr;

    res.header('Content-Type', 'application/json; charset=utf-8')
    if(buy(lottery_id, buy_addr, buyer_addr)) {
        var param = {'status':'ok','lottery_id':lottery_id, 'buy_addr':buy_addr, 'buyer_addr':buyer_addr};
        res.send(param)
    } else {
        var param = {'status':'ng','lottery_id':lottery_id, 'buy_addr':buy_addr, 'buyer_addr':buyer_addr};
        
    }   
});


module.exports = router;