'use strict';
require('./model/Companies.js');

var net = require('net');
var company = require('./controllers/Company.js');
var simulate = require('./simulation/simulation.js');


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

        if (received.type === 'getAll') {
            company.getAll(sendData);
        } else if (received.type === 'buy') {
            company.buy(received, sendData);
        } else if (received.type === 'sell') {
            company.sell(received, sendData);
        }
    });
    c.on('end', function () {
    });
});

setInterval(simulate.simulation, 10000);

server.listen(8000, function () {
    console.log('server bound');
});