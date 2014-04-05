'use strict';
var mongoose = require('mongoose'),
    Company = mongoose.model('Company');

exports.getAll = function (callback) {
    Company.getAll(function (err, data) {
        if (err) {
            return callback([]);
        }
        return callback(data);
    })
};

exports.buy = function (buyData, callback) {
    Company.getStockAmount(buyData.company, function (err, companyData) {
        if (err) {
            return callback('ERROR');
        }
        console.log('buying: ' + buyData.amount + ' avaiable ' + companyData.stockAmount)

        if (!companyData.stockAmount || companyData.stockAmount < buyData.amount) {
            return callback('REJECT');
        }
        Company.findAndModify({name: buyData.company},
            [],
            {$inc: {stockAmount: -buyData.amount}},
            function (err) {
                if (err) {
                    return callback('REJECT');
                }

                return callback('OK');
            });
    })
};

exports.sell = function (buyData, callback) {
    Company.findAndModify({name: buyData.company},
        [],
        {$inc: {stockAmount: buyData.amount}},
        function (err) {
            if (err) {
                console.log("REJECT based on " + err);
                return callback('REJECT');
            }
            console.log('sending OK')
            return callback('OK');
        });
};