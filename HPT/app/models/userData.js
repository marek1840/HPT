'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    company: String,
    amount: Number,
    averagePrice: Number
});

var brokerSchema = new Schema({
    name: String,
    funds: Number,
    releaseDate: Date
});

var UserDataSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    capital: Number,
    brokers: [brokerSchema],
    ownedStock: [stockSchema]
});

UserDataSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
    return this.collection.findAndModify(query, sort, doc, options, callback);
};

mongoose.model('UserData', UserDataSchema);