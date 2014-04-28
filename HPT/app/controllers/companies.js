'use strict';

var remote = require('./generatorConnection.js');

exports.getAll = function (req, res) {

    remote.getAllCompanies(function (companies) {
        return res.json(companies);
    });
};


exports.getAllWithLastChange = function (req, res) {
    remote.getAllCompanies(function (companies) {
        //console.log(companies);
        companies.map(function (company) {
            //console.log(company);
            //console.log(company.history);
            if (!(company.history)) {

            } else {
                var previousPrice = company.history[company.history.length - 2].price;//history[company.history.length-1] == stockPrice
                company.change = (company.stockPrice - previousPrice) / previousPrice;
                delete company.history;
                //console.log(company);
            }
            return company;
        });
//        console.log("send companies with last change to client");
        //niekiedy blad przy ponownym wysylaniu?

        return res.json(companies);
    });
};

exports.buy = remote.buy;

exports.sell = remote.sell;
