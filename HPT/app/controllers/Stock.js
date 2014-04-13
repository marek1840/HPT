'use strict';

//mongoose = require('mongoose'),
var UserData = require('./UserData');
var Companies = require('./companies');


exports.purchase = function (req, res) {
    UserData.findOne({
        email: req.body.email
    }, 'capital -_id', function (err, userData) {
        if (err) {
            return res.send('capital checking', 406);
        }

        if (userData.capital < req.body.cost) {
            return res.send('not enough cash: ' + req.body.cost, 406);
        }

        Companies.buy(
            {
                company: req.body.company,
                amount: req.body.amount
            }, function (response) {
                if (response !== 'OK') {
                    return res.send(response, 406);
                }

                UserData.updateCapital({
                    email: req.body.email,
                    amount: -req.body.cost
                }, function (err) {
                    if (err) {
                        return res.send('capital update failure: ' + err, 500);
                    }

                    UserData.updateStock({
                            email: req.body.email,
                            company: req.body.company,
                            amount: req.body.amount
                        }, function (err) {
                            if (err) {
                                return res.send(
									'stock update failure: ' + err, 500);
                            }
                            return res.json(200);
                        }
                    );
                });
            }
		);
    });
};

exports.sell = function (req, res) {
    Companies.sell(
        {
            company: req.body.company,
            amount: req.body.amount
        }, function (response) {
            if (response !== 'OK') {
                return res.send(
					response + ' eq= ' + (response !== 'OK') + 
					' len ' + (response.length), 406);
            }

            UserData.updateCapital({
                email: req.body.email,
                amount: req.body.cost
            }, function (err) {
                if (err) {
                    return res.send('capital update failure: ' + err, 500);
                }

                UserData.updateStock({
                    email: req.body.email,
                    company: req.body.company,
                    amount: -req.body.amount
                }, function (err) {
                    if (err) {
                        return res.send('stock update failure: ' + err, 500);
                    }

                    return res.send(200);
                });
            });
        }
    );
};
