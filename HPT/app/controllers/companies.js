'use strict';

var remote = require('./generatorConnection.js');

exports.getAll = function (req, res) {
    remote.getAllCompanies(function (companies) {
        return res.json(companies);
    });
};

exports.getAllWithLastChange = function (req, res) {
    remote.getAllCompanies(function (companies) {
    	console.log(companies);
    	companies.map( function(company) {
    		//console.log(company);
    		if (!(company.history)) {
    			console.log("no history");
    		} else {
    			//console.log(company.history);
    			previousPrice = company.history[0].price;
	    		company.change = (company.stockPrice - previousPrice)/previousPrice
	    		delete json.history;
	    		console.log(company);
	    	}
    		return company;
    	});
    	console.log("send companies with last change");
    	//niekiedy blad przy ponownym wysylaniu?
        return res.json(companies);
    });
};

exports.buy = remote.buy;

exports.sell = remote.sell;
