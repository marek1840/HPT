//potrzebna jest instalacja dodatkowego modulu
//npm install request

var http = require('http');
var generator = require('./../app/controllers/generatorConnection');
var userData = require('./../app/controllers/userData');
var mongoose = require('mongoose');
var request = require('request');

var name = '';
var strategy = {};
var cash = 0;
var end = 0;
var counter = 0;
var profit = 0;
var companiesData = {};
var ownedData = {};
var bought = [];

/*Argumenty: 	name - nazwa uzytkownika
				cash - ile przeznaczamy do wydania pieniedzy
				strategy - strategia dobierana przez brokera (plik strategies.js)
				end - ilosc milisekund(???) do czasu wygasniecia
				profit - w jakim przypadku sprzedawac akcje, tj. ile procent musisz zarobic na tranzakcji
*/
function Broker(_name, _cash, _strategy, _end, _profit) {
	name = _name;
	strategy = _strategy;
	end = _end;
	cash = _cash;
	profit = _profit;
	getCompaniesData();
	//getOwnedData();
}

function getCompaniesData () {
	var options = {
		host: 'localhost',
		path: '/companies.json',
		port: 3000
	};
	var req = http.get(options, function(res) {
		var bodyChunks = [];
		res.on('data', function(chunk) {
			bodyChunks.push(chunk);
		}).on('end', function() {
			var body = Buffer.concat(bodyChunks);
			companiesData = JSON.parse(body);
		})
	});

	req.on('error', function(e) {
		console.log('ERROR: ' + e.message);
	});
}

function getOwnedData () {
	var options = {
		host: 'localhost',
		path: '/users/'+name+'/stock',
		port: 3000
	};
	var req = http.get(options, function(res) {
		var bodyChunks = [];
		res.on('data', function(chunk) {
			bodyChunks.push(chunk);
		}).on('end', function() {
			var body = Buffer.concat(bodyChunks);
			console.log(''+body);
			ownedData = JSON.parse(body);
			return body;
		})
	});
	req.on('error', function(e) {
		console.log('ERROR: ' + e.message);
	});
}

function buy (company, amount, price) {
	request.post('http://localhost:3000/purchase',
		{ json: {"email":name,"company":company,"amount":amount,"cost":amount*price} },
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				//console.log('bought')
			}
		}
	);
}

function sell (company, amount, price) {
	request.post('http://localhost:3000/sell',
		{ json: {"email":name,"company":company,"amount":amount,"cost":amount*price} },
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				//console.log('sold')
			}
		}
	);
}

Broker.prototype.sale = function(company, amount, price) {
	sell(company, amount, price);
}

Broker.prototype.purchase = function(company, amount, price) {
	buy(company, amount, price);
}

Broker.prototype.start = function() {
	var interval = setInterval( function() {
		getCompaniesData();
		var newValues = strategy(cash, profit, bought, companiesData, 200);
		newValues.toSell.forEach(function(val) {
			sell(val.company, val.amount, val.price);
		});
		newValues.toBuy.forEach(function(val2) {
			buy(val2.company, val2.amount, val2.price);
		});
		cash = newValues.cash;
		bought = newValues.bought;
		counter++;
		if (counter >= (end / 20000)) {
			clearInterval(interval);
		}
	}, 20000);
}

Broker.prototype.getData = function() {
	getCompaniesData();
	//console.log(companiesData);
}

Broker.prototype.getOwned = function() {
	console.log(ownedData);
}

Broker.prototype.stop = function() {
	clearInterval(20000);
}
	
module.exports = Broker;