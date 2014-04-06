'use strict';
var mongoose = require('mongoose'),
    Company = mongoose.model('Company');

function random (low, high) {
  return Math.random() * (high - low) + low;
}

function generateNewStockPrice(stockPrice) {
  return Math.floor(stockPrice * random(0.75, 1.3));
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