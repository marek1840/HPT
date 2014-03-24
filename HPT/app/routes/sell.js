'use strict';

// User routes use users controller
var companies = require('../controllers/companies');
var userData = require('../controllers/userData');

module.exports = function(app) {
	//gets list of currently owned stock
	app.get('/sell', function(req, res){
		return res.json('GET sell');
	});

	//communicates with generator
	//removes sold stock from user Data
	app.post('/sell', function(req, res){
		return res.json('POST sell');
	});

}