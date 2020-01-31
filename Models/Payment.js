var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Payment = new Schema({
    
    custo_name: {type: String,  default: null},    /// customer name
    custo_id: {type: String,  default: null},    /// customer name
    amount:{type: String,  default: null},
    total:{type: String,  default: null},
    due_total:{type: String,  default: null},
    bnk_charg:{type: String,  default: null},
    deposite: {type: String,  default: null},
    deposite_to: {type: String,  default: null},
    ref_no: {type: String,  default: null},
    is_TDS: {type: Boolean,  default: false}, 
    TDS: {type: String,  default: null}, 

    // unpaid_invoice:{type:Array , ref:Models.Invoice},
    Invoice_no :{type: String,  default: null},
    amt_refund:{type: String,  default: null},
    amt_recieve:{type: String,  default: null},
    amt_recieve_by:{type: String,  default: null},
    notes:{type: String,  default: null},
   
    attach:{type: [String],  default: null},        // AttachMent

    confirm: {type: Boolean,  default: false}, 
    payment:{type: Boolean,  default: false}, 
    cancel: {type: Boolean,  default: false}, 

    payment_dt: {type: Date,  default: null},       // Payment Date
    payment_mode: {type: String,  default: null},   // Payment Date
    payment_no: {type: String,  default: null},     // Payment Number

    cr_by: {type: String, default: null},
    up_by: {type: String, default: null},

    cr_date: {type: Date, default: Date.now, required: true},
    Cancle_Date: {type: Date, default: Date, default: null},

});

module.exports = mongoose.model('Payment', Payment);