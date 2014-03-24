'use strict';

// User routes use users controller
var companies = require('../controllers/companies');
var userData = require('../controllers/userData');

module.exports = function(app) {
	//gets every company data(stock price, change %)
	app.get('/purchase', function(req, res){
		return res.json('GET /purchase');
	});

	//communicates with generator
	//adds purchased stock to user stock
	app.post('/purchase', function(req, res){
		return res.json('POST /purchase');
	});

}