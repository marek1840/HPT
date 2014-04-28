var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/generator');

var CompanySchema = new Schema({
    name: String,
    industry: String,
    stockPrice: Number,
    stockAmount: Number
});

CompanySchema.statics.getAll = function (callback) {
    this.find({}, 'name industry stockPrice stockAmount -_id', callback)
};

CompanySchema.statics.findAndModify = function (query, sort, doc, options, callback) {
    return this.collection.findAndModify(query, sort, doc, options, callback);
};

var company = mongoose.model('Company', CompanySchema);
