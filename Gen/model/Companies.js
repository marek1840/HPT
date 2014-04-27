var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/generator');

var CompanySchema = new Schema({
    name: String,
    industry: String,
    stockPrice: Number,
    stockAmount: Number,
    history: [{
    	price: Number,
    	date: Date //must be sorted
    }]
});

CompanySchema.statics.getAll = function (callback) {
    this.find({}, 'name industry stockPrice history -_id', callback)
};

CompanySchema.statics.getStockAmount = function (companyName, callback) {
    this.findOne({name: companyName}, 'stockAmount -_id', callback)
};

CompanySchema.statics.findAndModify = function (query, sort, doc, options, callback) {
    return this.collection.findAndModify(query, sort, doc, options, callback);
};

CompanySchema.statics.removeAll = function (callback) {
    this.remove({}, callback);
};

var company = mongoose.model('Company', CompanySchema);
