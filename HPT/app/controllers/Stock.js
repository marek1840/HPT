'use strict';

    //mongoose = require('mongoose'),
var UserData = require('./UserData'),
    Companies = require('./companies');

exports.purchase = function (req, res) {


    UserData.findOne({
        email: req.body.email
    }, 'capital -_id', function (err, userData) {

        if (err) {
            return res.send('too few gold', 406);
        }

        if (userData.capital < req.body.cost) {
            return res.send('not enough cash: ' + req.body.cost);
        }

        Companies.buy(
            {
                company: req.body.company,
                amount: req.body.amount
            }, function (response) {
                if (response !== 'OK') {
                    return res.send(406);
                }
                else {
                    UserData.updateCapital({
                        email: req.body.email,
                        amount: -req.body.cost
                    }, function (err) {
                        if (err) {
                            return res.send('capital update failure', 500);
                        } else {
                            UserData.updateStock(
                                {
                                    email: req.body.email,
                                    company: req.body.company,
                                    amount: req.body.amount
                                }, function (err) {
                                    if (err) {
                                        return res.send('stock update failure', 500);
                                    } else {
                                        return res.send(200);
                                    }
                                }
                            );
                        }
                    });

                }
            });
    });
};

exports.sell = function (req, res) {
    Companies.sell(
        {
            company: req.body.company,
            amount: req.body.amount
        }, function (response) {
            if (response !== 'OK') {
                return res.send(406);
            } else {
                UserData.updateCapital({
                    email: req.body.email,
                    amount: req.body.income
                }, function (err) {
                    if (err) {
                        return res.send('capital update failure', 500);
                    } else {
                        UserData.updateStock({
                            email: req.body.email,
                            company: req.body.company,
                            amount: -req.body.amount
                        }, function (err) {
                            if (err) {
                                return res.send('stock update failure', 500);
                            } else {
                                return res.send(200);
                            }
                        });
                    }
                });
            }
        }
    );
};