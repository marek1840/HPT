'use strict';

var mongoose = require('mongoose');
var UserData = mongoose.model('UserData');

exports.data = function (req, res) {
    UserData.findOne({
        email: req.params.email
    }, 'email capital -_id', function (err, data) {
        return res.json(data);
    });
};

exports.owned = function (req, res) {
    UserData.findOne({email: req.params.email}, 'ownedStock -_id',
        function (err, data) {
            return res.json(data);
        });
};

exports.brokers = function (req, res) {
    UserData.findOne({email: req.params.email}, 'brokers -_id',
        function (err, data) {
            return res.json(data);
        });
};

exports.updateCapital = function (updateData, callback) {
    UserData.findAndModify({email: updateData.email},
        [],
        {$inc: {capital: updateData.amount}},
        callback);
};


exports.updateStock = function (stockData, callback) {
    UserData.findOne({
        email: stockData.email
    }, {}, function (err, userData) {
        if (err) {
            return callback(err);
        }

        //finding index of company
        var index = -1;
        for (var i = 0; i < userData.ownedStock.length && index < 0; ++i) {
            if (userData.ownedStock[i].company === stockData.company) {
                index = i;
            }
        }

        userData.ownedStock.filter(function (stock) {
            return stock.company === stockData.company;
        });

        //if there is no entry - create one
        if (index < 0) {
            var newStock = {
                company: stockData.company,
                amount: stockData.amount,
                averagePrice: stockData.averagePrice
            };

            userData.ownedStock.push(newStock);
        } else {
            //updates amount
            var amount = userData.ownedStock[index].amount + stockData.amount;

            if (amount === 0) {
                //removing entry
                userData.ownedStock.splice(index, 1)
            } else {
                //updating entry
                userData.ownedStock[index].amount = amount;
            }

            if (stockData.amount > 0) {
                //if buying - update average price
                var averagePrice = (userData.ownedStock[index].amount * userData.ownedStock[index].averagePrice +
                    stockData.amount * stockData.averagePrice) / amount;
                userData.ownedStock[index].averagePrice = averagePrice;
            }
        }

        return userData.save(function (err) {
            return callback(err);
        });
    });
};

exports.findOne = function (where, filter, callback) {
    return UserData.findOne(where, filter, callback);
};