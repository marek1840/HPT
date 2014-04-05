'use strict';
require('./model/Companies.js');

var net = require('net'),
    Company = require('./controllers/Company.js');


var server = net.createServer(function (c) {
    var sendData = function (data) {
        if (typeof data !== 'string') {
            return c.write(JSON.stringify(data));
        } else {
            return c.write(data);
        }
    }

    c.on('data', function (data) {
        var received = JSON.parse(data.toString());

        console.log('got ' + JSON.stringify(received))

        if (received.type === "getAll") {
            Company.getAll(sendData);
        } else if (received.type === "buy") {
            console.log("entering buy");
            Company.buy(received, sendData);
            console.log("leaving buy");
        } else if (received.type === "sell") {
            Company.sell(received, sendData);
        }
    });
    c.on('end', function () {
    });
});

server.listen(8000, function () {
    console.log('server bound');
});


