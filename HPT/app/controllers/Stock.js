'use strict';

var mongoose = require('mongoose'),
    UserData = mongoose.model('UserData')

exports.purchase = function (req, res) {
    UserData.findOne({
        email: req.body.email
    }, 'capital -_id', function (err, userData) {
        if (err) {
            return res.send('purchase err: ' + err);
        }

        if (userData.capital < req.body.cost) {
            return res.send('not enough cash: ' + userData.capital)
        }

        return res.send('OK')

    })
}