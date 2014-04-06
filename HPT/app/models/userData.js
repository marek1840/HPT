'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    company: String,
    amount: Number
});

var UserDataSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    capital: Number,
    ownedStock: [stockSchema]
});

UserDataSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
    return this.collection.findAndModify(query, sort, doc, options, callback);
};

mongoose.model('UserData', UserDataSchema);