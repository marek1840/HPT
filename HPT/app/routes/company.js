'use strict';

// User routes use users controller
var Companies = require('../controllers/companies');

module.exports = function (app) {

    app.get('/companies.json', Companies.getAll);
    //app.get('/companies.json', Companies.getStockAmount);

    // second iteration
    //communicates with generator
    // app.get('/:company/history', function(req, res))


};