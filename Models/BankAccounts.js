var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Configuration = require('../Configuration');

var BankAccounts = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    bankName: {type: String},
    accountNumber: {type: String, required: true},
    sortCode: {type: String, required: true},
    accountName: {type: String, required: true}
});

module.exports = mongoose.model('BankAccounts', BankAccounts);