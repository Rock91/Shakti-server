var mongoose = require('mongoose');
var Models = require('../Models');
var Schema = mongoose.Schema;

var ItemGroup = new Schema({

    name: {type: String, default: null},
    crdate: {type: Date, default:Date.now()},
   
    isdel : {type:String ,default :false},
    
    // items :{type:Array , ref:Models.Items},
    
});

module.exports = mongoose.model('ItemGroup', ItemGroup);