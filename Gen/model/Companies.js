var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var CompanySchema = new Schema({
    name: String,
    industry: String,
    stockPrice: Number,
    stockAmount: Number
})

CompanySchema.statics.getAll = function(callback){
    this.find({}, 'name industry stockPrice -_id', callback)
}

CompanySchema.statics.getStockAmount = function(companyName, callback){
    this.findOne({name: companyName}, "stockAmount -_id", callback)
}

var Company = mongoose.model('Company', CompanySchema);
