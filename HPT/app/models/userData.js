'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserDataSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
    capital: Number,
	ownedStock: [{
		company: String,
		amount: Number
	}]
});

UserDataSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
    return this.collection.findAndModify(query, sort, doc, options, callback);
};

UserDataSchema.statics.capitalOf = function(email){
    return this.findOne({
        email:email
    }).capital;
}

mongoose.model('UserData', UserDataSchema);