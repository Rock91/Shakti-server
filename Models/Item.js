var mongoose = require('mongoose');
var Models = require('../Models');
var Schema = mongoose.Schema;

var Item = new Schema({
    // lcId: {type: Number, unique: true, index: true},
    name: {type: String, default: null},
    type: {type: String, default: null},
    unit: {type: String, default: null},
    image: {type: String, default: null},
    isreturn: {type: Boolean, default: false},
    multiple: {type: Boolean, default: false},
    dim: {type: String, default: null},
    weight: {type: String, default: null},
    manu_id: {type: String, default: null},
    manu_nm: {type: String, default: null},
    brand: {type: String, default: null},
    sales_info: {type: Boolean, default: false},
    sell_price: {type: String, default: null},
    account: {type: String, default: null},
    discount: {type: String, default: null},
    desc: {type: String, default: null},
    purchase: {type: Boolean, default: false},
    purchase_price: {type: String, default: null},
    account2: {type: String, default: null},
    desc_2: {type: String, default: null},
    track_in: {type: Boolean, default: false},
    account3: {type: String, default: null},
    opening_stock: {type: String, default: null},
    opening_stock_val: {type: String, default: null},
    reorder: {type: String, default: null},
    pre_vender_id: {type: String, default: null},
    pre_vender_nm: {type: String, default: null},
    first_trans: {type: Boolean, default: null},
    isedit: {type: Boolean, default: null},
    isgrp: {type: Boolean, default: null},
    useremail: {type: String, default: null},
    UserId: {type: String, default: null},
    Itemnm: {type: String, default: null},
    type:{type:String, default:null},
   
    extra: {type: String,default: null},
    
    Itemdate: {type: Date,default: null},
    ItemTime: {type: String,default: null},
    crdate: {type: Date, default:Date.now()},
   
    isdel : {type:String ,default :false},
    
    
});

module.exports = mongoose.model('Item', Item);