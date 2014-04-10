'use strict';

// User routes use users controller
//var companies = require('../controllers/companies');
var stock = require('../controllers/Stock');


module.exports = function(app) {
	//communicates with generator
	//adds purchased stock to user stock
	app.post('/purchase', stock.purchase);

    app.post('/sell', stock.sell);

};