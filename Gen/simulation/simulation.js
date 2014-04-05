function random (low, high) {
  return Math.random() * (high - low) + low;
}

function generateNewStockPrice(stockPrice) {
  return stockPrice * random(0.75, 1,25);
}

var Company = require('./../model/Companies.js');

var simulation = function() {
  Company.getAll(function(companies) {
    for(var company in companies){
      company.stockPrice= generateNewStockPrice(company.stockPrice)
      company.save()
    }
});

module.exports.simulation = simulation;