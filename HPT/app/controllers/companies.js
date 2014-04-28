'use strict';

var remote = require('./generatorConnection.js');

exports.getAll = function (req, res) {

    remote.getAllCompanies(function (companies) {
        return res.json(companies);
    });
};

exports.buy = remote.buy;

exports.sell = remote.sell;