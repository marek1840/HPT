'use strict';

var net = require('net');

exports.getAllCompanies = function (callback) {
    var client = net.connect({port: 8000}, function () {
        client.write(JSON.stringify({'type': 'getAll'}));
    });

    client.on('data', function (data) {
        callback(JSON.parse(data.toString()));
        client.end();
    });

    client.on('end', function () {
    });
};

exports.buy = function (toBuy, callback) {
    var client = net.connect({port: 8000}, function () {
        toBuy.type = 'buy';
        client.write(JSON.stringify(toBuy));
    });

    client.on('data', function (data) {
        callback(data.toString());
        client.end();
    });

    client.on('end', function () {
    });
};

exports.sell = function (toSell, callback) {
    var client = net.connect({port: 8000}, function () {
        toSell.type = 'sell';
        client.write(JSON.stringify(toSell));
    });

    client.on('data', function (data) {
        callback(data.toString());
        client.end();
    });

    client.on('end', function () {
    });
};






