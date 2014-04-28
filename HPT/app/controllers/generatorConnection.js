'use strict';

var net = require('net');

exports.getAllCompanies = function (callback) {
    var client = net.connect({port: 8000}, function () {
        client.write(JSON.stringify({'type': 'getAll'}));
    });
	var data='';
    client.on('data', function (chunk) {
    	data += chunk;
    	//console.log('received from generator:\n'+chunk);
    });

    client.on('end', function () {
    	console.log('received all companies from generator');
       	callback(JSON.parse(data.toString()));
        client.end();
    });
};
exports.getCompanyStockAmount = function (company, callback) {
    var client = net.connect({port: 8000}, function () {
        company.type = 'getStockAmount';
        client.write(JSON.stringify({'type': 'getStockAmount'}));
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






