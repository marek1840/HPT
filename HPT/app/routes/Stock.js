'use strict';

// User routes use users controller
var companies = require('../controllers/companies');
var Stock = require('../controllers/Stock');


module.exports = function(app) {
	//communicates with generator
	//adds purchased stock to user stock
	app.post('/purchase', Stock.purchase);

    app.post('/sell', function(req, res){
        return res.json('POST sell');
    });

}