var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Warehouse = new Schema({
    name: {type: String, trim: true,  default: null},
    email: {type: String, trim: true, required: true, index: true},
    country: {type: String,  default:null},
    adr: {type: String,  default:null},
    city: {type: String,  default:null},
    zip: {type: String,  default:null},
    phone: {type: String,  default:null},
    fax: {type: String,  default:null},
    registrationDate: {type: Date, default: Date.now, required: true},
    isdel: {type: Boolean,default: false},
    code: {type: String,  default:null},
});

module.exports = mongoose.model('Warehouse', Warehouse);