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

        var index = -1;
        for (var i = 0; i < userData.ownedStock.length && index < 0; ++i) {
            if (userData.ownedStock[i].company === stockData.company) {
                index = i;
            }
        }

        userData.ownedStock.filter(function (stock) {
            return stock.company === stockData.company;
        });

        if (index < 0) {
            var stock = {
                company: stockData.company,
                amount: stockData.amount
            };

            userData.ownedStock.push(stock);
        } else {
            var amount = userData.ownedStock[index].amount + stockData.amount;
            if (amount === 0) {
                //removing entry
                var v = userData.ownedStock.splice(index, 1)
            } else {
                //updating entry
                userData.ownedStock[index].amount = amount;
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