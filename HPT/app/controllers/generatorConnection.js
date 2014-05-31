'use strict';

// var net = require('net');

// exports.getAllCompanies = function (callback) {
//     var client = net.connect({port: 8000}, function () {
//         client.write(JSON.stringify({'type': 'getAll'}));
//     });
// 	var data='';
//     client.on('data', function (chunk) {
//     	data += chunk;
//     	//console.log('received from generator:\n'+chunk);
//     });

//     client.on('end', function () {
//     	console.log('received all companies from generator');
//        	callback(JSON.parse(data.toString()));
//         client.end();
//     });
// };

// exports.buy = function (toBuy, callback) {
//     var client = net.connect({port: 8000}, function () {
//         toBuy.type = 'buy';
//         client.write(JSON.stringify(toBuy));
//     });

//     client.on('data', function (data) {
//         callback(data.toString());
//         client.end();
//     });

//     client.on('end', function () {
//     });
// };

// exports.sell = function (toSell, callback) {
//     var client = net.connect({port: 8000}, function () {
//         toSell.type = 'sell';
//         client.write(JSON.stringify(toSell));
//     });

//     client.on('data', function (data) {
//         callback(data.toString());
//         client.end();
//     });

//     client.on('end', function () {
//     });
// };

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.getAllCompanies = function (callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8890/', true);
    xhr.onreadystatechange=function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            console.log('Got response:\n' + data);
            callback(JSON.parse(data));
        }
    }
    xhr.send(JSON.stringify({'type': 'getAll'}));
}

exports.buy = function (toBuy, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8890/', true);
    xhr.onreadystatechange=function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            console.log('Got response:\n' + data);
            callback(data);
        }
    }
    toBuy.type = 'buy';
    xhr.send(JSON.stringify(toBuy));
}

exports.sell = function (toSell, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8890/', true);
    xhr.onreadystatechange=function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            console.log('Got response:\n' + data);
            callback(data);
        }
    }
    toSell.type = 'sell';
    xhr.send(JSON.stringify(toSell));
}





