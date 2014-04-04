'use strict';

var mongoose = require('mongoose'),
    UserData = mongoose.model('UserData');

exports.data = function (req, res) {
    UserData.findOne({
        email: req.params.email
    }, 'email capital -_id', function (err, data) {
        return res.json(data);
    });
};

exports.owned = function (req, res) {
    UserData.findOne({        email: req.params.email}, 'ownedStock -_id', function (err, data) {
        return res.json(data);
    });
};

exports.updateCapital = function (data, callback) {
    UserData.findAndModify({email: data.email},
        [],
        {$inc: {capital: data.amount}},
        callback);
};

exports.updateStock = function (data, callback) {
    UserData.findOne({
        email: data.email
    }, 'ownedStock -_id', function (err, data) {
        if (!data.ownedStock[data.company]) {
            UserData.findAndModify({
                    email: data.email,
                    'ownedStock.company': data.company
                }, {'ownedStock.$': 1},
                {'ownedStock.amount': data.amount},
                callback);
        } else {
            UserData.findAndModify({
                    email: data.email,
                    'ownedStock.company': data.company
                }, {'ownedStock.$': 1},
                {$inc: {'ownedStock.amount': data.amount}},
                callback);
        }
    });
};

exports.findOne = function (where, filter, callback) {
    return UserData.findOne(where, filter, callback);
};