'use strict';

// User routes use users controller
var userData = require('../controllers/userData');

module.exports = function(app) {
	//gets uset data (without stock) - email, capital
	app.get('/users/:email', function(req, res){
		return res.json('GET users/' + req.email);
	});

	//gets user stock
	app.get('/users/:email/stock', function(req, res){
		return res.json('GET users/' + req.email + '/stock');
	});

}