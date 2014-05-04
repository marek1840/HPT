'use strict';

var Broker = require('./broker/broker');
var strategy = require('./broker/strategies');

exports.hire = function(req, res){
    var data = req.body;
    var broker = {};
    console.log(data.type);
    console.log(data.type === 'all')

    if(data.type === 'all'){
         broker = new Broker(data.email, data.amount, strategy.buyAll, data.time, data.profit);
        console.log('most');
    }else if (data.type === 'most'){
        broker = new Broker(data.email, data.amount, strategy.buyMostStocks, data.time, data.profit)
        console.log('most');
    }else{
        console.log('wrong: ' + JSON.stringify(data));
        res.send(400);
    }

    broker.start();
    setInterval(broker.getData, 3000);
    res.send(200);
};