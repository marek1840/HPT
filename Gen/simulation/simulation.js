'use strict';
var mongoose = require('mongoose');
var company = mongoose.model('Company');

function random (low, high) {
	return Math.random() * (high - low) + low;
}

function generateNewStockPrice(stockPrice) {
	return Math.floor(stockPrice * random(0.95, 1.05));
}

exports.simulation = function() {
	company.getAll(function(err, data) {
		if(err)
			return console.log(err);
		data.forEach(function(singleCompany){
			company.findAndModify({ name: singleCompany.name },
				[],
				{ $set: { stockPrice: generateNewStockPrice(singlCompany.stockPrice) } },
				function (err) {
					if (err)
						return console.log(err);
					});
		});
	}
)};