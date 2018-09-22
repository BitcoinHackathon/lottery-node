var express = require('express');
var router = express.Router();

var lottery1 = [
    ['qwertyuiopasdfghjklzxcvbnm', 1, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 1, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 1, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 1, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 1, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 1, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 1, 'mnbvcxzlkjhgfdsapoitrewq'],
];

var lottery2 = [
    ['qwertyuiopasdfghjklzxcvbnm', 2, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 2, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 2, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 2, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 2, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 2, ''],
    ['qwertyuiopasdfghjklzxcvbnm', 2, 'mnbvcxzlkjhgfdsapoitrewq'],
];


function get_respons_for_lottery(lottery_id){
    var data;
    var res = '[';
    if(lottery_id == 1) {
        data = lottery1;
    } else if(lottery_id == 2) {
        data = lottery2;
    } else {
        return '';
    }

    console.log('start');
    
    data.forEach(function(item, index) {
        res += '{address:' + item[0];
        if(item[2] == '') {
            res += 'used:false}';
        } else {
            res += 'used:true}'
        }
    })
    res += ']';

    return res;
}

/* サンプルAPI① 
 * http://localhost:3000/lottery にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function (req, res, next) {
    var param = [
        {
            'id': 1,
            'title': '秋ジャンボ',
            'begin': '2018-09-01 00:00:00',
            'end': '2018-09-23 23:59:59',
            'describe': '秋でジャンボな宝くじです。'
        },
        {
            'id': 2,
            'title': '年末ジャンボ',
            'begin': '2018-09-01 00:00:00',
            'end': '2018-12-31 23:59:59',
            'describe': '年末でジャンボな宝くじです。'
        }
    ];
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
});


/* サンプルAPI③ 
 * http://localhost:3000/samples/hello/(任意の文字列) にGETメソッドのリクエストを投げると、
 * JSON形式で(任意の文字列)を返す。
 */
router.get('/:lottery_id', function (req, res, next) {
    var param = {'lottery-id': req.params.lottery_id + ' not found!'};
    if(req.params.lottery_id == '1') {
        param = get_respons_for_lottery(1);
        //param = {'lottery-id': req.params.lottery_id + ' found!'};
    } else if(req.params.lottery_id == '2'){
        param = get_respons_for_lottery(2);
        //param = {'lottery-id': req.params.lottery_id + ' found!'};
    }
    console.log('param = ');
    console.log(param);
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
  });

module.exports = router;