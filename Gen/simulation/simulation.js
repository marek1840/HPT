'use strict';
var mongoose = require('mongoose');
var Company = mongoose.model('Company');

function random (low, high) {
	return Math.random() * (high - low) + low;
}

function generateNewStockPrice(stockPrice) {
	return Math.floor(stockPrice * random(0.95, 1.05));
}

exports.simulation = function() {
	Company.getAll(function(err, data) {
		if(err)
			return console.log(err);
		data.forEach(function(company){
			Company.findAndModify({ name: company.name },
				[],
				{ $set: { stockPrice: generateNewStockPrice(company.stockPrice) } },
				function (err) {
					if (err)
						return console.log(err);
					});
		});
	}
)};