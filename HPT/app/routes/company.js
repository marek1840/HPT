'use strict';

// User routes use users controller
var companies = require('../controllers/companies');

module.exports = function (app) {


    app.get('/companies.json', companies.getAll);
    //app.get('/companies.json', Companies.getStockAmount);


    // second iteration
    //communicates with generator
    // app.get('/:company/history', function(req, res))


};