'use strict';
require('./model/Companies.js');

// var net = require('net');
var http = require('http');
var Company = require('./controllers/Company.js');
var simulate = require('./simulation/simulation.js');


// var server = net.createServer(function (c) {
//     var sendData = function (data) {
//     	//console.log('sending companies:\n'+data);
//     	var r;
//         if (typeof data !== 'string') {
//             r = c.write(JSON.stringify(data));
//         } else {
//             r = c.write(data);
//         }
//         console.log('end sending data to HPT server');
//         c.end();
//         return r;
//     }

//     c.on('data', function (data) {
//         var received = JSON.parse(data.toString());

//         console.log('got ' + JSON.stringify(received))

//         if (received.type === "getAll") {
//             Company.getAll(sendData);
//         } else if (received.type === "buy") {
//             Company.buy(received, sendData);
//         } else if (received.type === "sell") {
//             Company.sell(received, sendData);
//         }
//     });
//     c.on('end', function () {
//     });
// });

// setInterval(simulate.simulation, 10000);

// server.listen(8000, function () {
//     console.log('server bound');
// });


http.createServer(function (request, response) {

    var sendData = function (data) {
        //console.log('sending companies:\n'+data);
        var r;
        if (typeof data !== 'string') {
            r = response.end(JSON.stringify(data));
        } else {
            r = response.end(data);
        }
        console.log('end sending data to HPT server');
        return r;
    }

    if (request.method == 'POST') {
        var data = '';
        request.on('data', function (chunk) {
            data += chunk;
        });
        request.on('end', function() {
            var received = JSON.parse(data.toString());
            console.log('got ' + JSON.stringify(received));
            if (received.type == 'getAll') {
                Company.getAll(sendData);
            } else if (received.type == 'buy') {
                Company.buy(received, sendData);
            } else if (received.type == 'sell') {
                Company.sell(received, sendData);
            }
        });
    }

}).listen(8890);