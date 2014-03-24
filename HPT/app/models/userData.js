'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userDataSchema = new Schema({
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

mongoose.model('UserData', userDataSchema);