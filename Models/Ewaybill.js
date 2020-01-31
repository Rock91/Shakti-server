var mongoose = require('mongoose');
var Models = require('../Models');
var Schema = mongoose.Schema;

var Ewaybill = new Schema({
    doc_type: {type: String,  required: true},
    trans_type: {type: String, default: null},  /// transport type(import/export)
    c_name: {type: String,  default: null},    /// Customer name
    // Invoice: {type:Array , ref:Models.Invoices},   ///get Invoice from invoice
    trans_det: {type: String, default: null},          //transporter detail
    trans_nm: {type: String, default: null},             //transporter Name
    dist: {type: String,  default: null},               // distance
    
    trans_contac: {type: String, default: null},          //transporter contact
    trans_nm: {type: String, default: null},             //transporter Name
    dist: {type: String,  default: null}, 

    vehical_type: {type: String,  default: null}, 
    vehical_no: {type: String,  default: null}, 
    trasporter_doc:{type: String,  default: null},

    isdel: {type:Boolean, default:false},
    cr_by: {type: String, default: null},
    cr_date: {type: Date, default: Date.now, required: true},
});

module.exports = mongoose.model('Ewaybill', Ewaybill);