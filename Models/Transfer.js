var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transfer = new Schema({
    trans_no: {type: String,   default: null},
    reason: {type: String,   default: null},
    sourc_w_id: {type: String, default: null},
    sourc_w: {type: String, default: null},
    desti_w_id: {type: String, default: null},
    desti_w: {type: String, default: null},
    items:{type:[String], default:[]},
    item_qty: {type: String,  default:null},
    total_qty: {type: String,  default:null},
    total_qty: {type: String,  default:null},
    is_transfer : {type: Boolean,default: false},
    transfer_date: {type: Date, default: Date.now},
    receiveby : {type: String,  default:null},
    cr_date: {type: Date, default: Date.now, required: true},
    isdel: {type: Boolean,default: false},
    code: {type: String,  default:null},
});

module.exports = mongoose.model('Transfer', Transfer);