'use strict';

// User routes use users controller
var companies = require('../controllers/companies');

module.exports = function (app) {

    app.get('/companies.json', function (req, res) {
        return res.json([
            {
                name: 'c1',
                industry: 'military',
                difference: '100',
                stockPrice: 150
            },
            {
                name: 'c2',
                industry: 'furniture',
                difference: '200',
                stockPrice: 12
            }
        ]);
    });

    //communicates with generator
    //gets company data (current stock proce, brand, price change in %)
    app.get('/company/:companyName', function (req, res) {
        return res.json('got company');
    });


    // second iteration
    //communicates with generator
    // app.get('/:company/history', function(req, res))


};