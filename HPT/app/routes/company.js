'use strict';

// User routes use users controller
var companies = require('../controllers/companies');

module.exports = function(app) {

	//communicates with generator
	//gets company data (current stock proce, brand, price change in %)
	app.get('/company/:companyName', function(req, res){
		return res.json('GET company/' + req.companyName);
	});


	// second iteration
	//communicates with generator
	// app.get('/:company/history', function(req, res))



}