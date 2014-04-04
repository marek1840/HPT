'use strict';

// User routes use users controller
var User = require('../controllers/userData');

module.exports = function(app) {
	app.get('/users/:email', User.data);
    app.get('/users/:email/stock', User.owned);
};