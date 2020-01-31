var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contact_Person = new Schema({
    name: {type: String,  default:null},
    adr: {type: String,  default:null},
    email: {type: String,  default:null},
    phone: {type: String,  default:null},
})

var Other = new Schema({
    currency: {type: String,  default:null},
    open_bal: {type: String,  default:null},
    fb: {type: String,  default:null},
    twitr: {type: String,  default:null},
})

var address = new Schema({
    country: {type: String,  default:null},
    adr: {type: String,  default:null},
    city: {type: String,  default:null},
    zip: {type: String,  default:null},
    phone: {type: String,  default:null},
    fax: {type: String,  default:null},
})

var Customer = new Schema({
    name: {type: String,  required: true},
    f_name: {type: String, default: null},
    l_name: {type: String, default: null},
    c_name: {type: String,  default: null},    /// compney name
    custo_type: {type: String, required: true},
    ref_c: {type: String,  default: null},    /// refrence   name
    c_gen: {                                    /// customer gender
        type: String, enum: [
            'MALE',
            'FEMAIL'
        ]
    },
    email: {type: String, default: null},
    phone: {type: String, default: null},
    website: {type: String,  default: null},
    bill_adr:{type: [address], default: []},
    ship_adr:{type: [address], default: []},
    other:{type: [Other], default: []},
    extra_cont:{type: [Contact_Person], default: []},
    description: {type: String, default: null},
    address: {type: String, default: null},
    isdel: {type:Boolean, default:false},
    isActive:{type:Boolean, default:true},
    cr_by: {type: String, default: null},
    registrationDate: {type: Date, default: Date.now, required: true},
});

module.exports = mongoose.model('Customer', Customer);