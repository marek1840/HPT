'use strict';
require('./model/Companies.js');

var net = require('net');
var company = require('./controllers/Company.js');
var simulate = require('./simulation/simulation.js');


var server = net.createServer(function (c) {
    var sendData = function (data) {
    	//console.log('sending companies:\n'+data);
    	var r;
        if (typeof data !== 'string') {
            r = c.write(JSON.stringify(data));
        } else {
            r = c.write(data);
        }
        console.log('end sending data to HPT server');
        c.end();
        return r;
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
