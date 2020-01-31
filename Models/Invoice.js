var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Billing = new Schema({
    qauntity:{type: Number,  default: null},
    rate:{type: Number,  default: null},
    tax:{type: Number,  default: null},
    GST:{type:Number,  default: null},
    CGST:{type:Number,  default: null},
    IGST:{type:Number,  default: null},
    amount:{type: String,  default: null},
    subtotal:{type: String,  default: null},
    discount:{type: String,  default: null},
    total:{type: String,  default: null},
})

var Challan = new Schema({
    no:{type: String,  default: null},
    ref:{type: String,  default: null},
    cr_dt:{type: Date,  default: null},
    type:{type:String,  default: null},
    item:{type:String,  default: null},
    notes: {type:String,  default: null},
})

var address = new Schema({
    country: {type: String,  default:null},
    adr: {type: String,  default:null},
    city: {type: String,  default:null},
    zip: {type: String,  default:null},
    phone: {type: String,  default:null},
    fax: {type: String,  default:null},
})

var Invoice = new Schema({
    
    custo_name: {type: String,  default: null},    /// customer name
    custo_id: {type: String,  default: null},    /// customer name

   
    sales_name: {type: String,  default: null},    /// sales person name
    sales_id: {type: String,  default: null},    /// sales person id

    project_name: {type: String,  default: null},    /// Project name
    project_id: {type: String,  default: null},    /// Project id
    project_des: {type: String,  default: null},    // Project Description
    del_adr: {type: [address],  default: null},     // Delivery Address
    attach:{type: [String],  default: null},        // AttachMent

    term: {type: Boolean,  default: false}, 
    Billing:{type: [Billing],  default: []},
    isdel: {type: Boolean,  default: false}, 
    confirm: {type: Boolean,  default: false}, 
    payment:{type: Boolean,  default: false}, 
    cancel: {type: Boolean,  default: false}, 
    deliverd: {type: Boolean,  default: false}, 
    return: {type: Boolean,  default: false}, 

    payment_dt: {type: Date,  default: null},   // Payment Date

    cr_by: {type: String, default: null},
    up_by: {type: String, default: null},

    invoice_num: {type: String,  required: true},   // invoice_num number
    invoice_Date: {type: Date, default: Date.now, required: true},
    return_Date: {type: Date, default: Date, default: null},

});

module.exports = mongoose.model('Invoice', Invoice);