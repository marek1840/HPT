'use strict';

var mongoose = require('mongoose'),
    UserData = mongoose.model('UserData')

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
}

exports.updateCapital = function (data, callback) {
    UserData.findAndModify({email: data.email},
        [],
        {$inc: {capital: data.amount}},
        function (err) {
            if (!err) {
                return callback()
            }
        })
}

exports.updateStock = function (data, callback) {
    UserData.findAndModify({
            email: data.email,
            'ownedStock.company': data.company
        }, {'ownedStock.$': 1},
        {$inc: {'ownedStock.amount': data.amount}},
        function (err) {
            if (!err) {
                return callback();
            }
        });
}