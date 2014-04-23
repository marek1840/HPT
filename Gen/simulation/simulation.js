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
			var newStockPrice = generateNewStockPrice(singleCompany.stockPrice);
			//var time = new Date();
			company.findAndModify({ name: singleCompany.name },
				[],
				{ 	$set: { stockPrice: newStockPrice}, 
					$push: {history: 
						{	$each: [{price: newStockPrice, date: new Date()}], 
							$slice: -16
						}
					} 
				},
				function (err) {
					if (err)
						return console.log(err);
					});
			
		});
		/*company.findAndModify({ history: {$size: {$gt: 16}} },
			[],
			{ $pull: {history: -1}} },//remove first element from array if history have more than 16 elements
			function (err) {
				if (err)
					return console.log(err);
				});*/
	}
)};
