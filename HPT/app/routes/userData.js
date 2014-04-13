'use strict';

// User routes use users controller
var user = require('../controllers/userData');

module.exports = function(app) {
	app.get('/users/:email', user.data);
    app.get('/users/:email/stock', user.owned);
    app.get('/users/:email/brokers', user.brokers);
};