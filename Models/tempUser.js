var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Configuration = require('../Configuration');

var tempUser = new Schema({
    // lcId: {type: Number, unique: true, index: true},
    lcId: {type: Number, default: null},

    name: {type: String, default: null},
    email: {type: String, default: null},
    password: {type: String, default:null}, 
    profilePicURL:  {type: String, default:null}, 
    gender: {type: String, enum: ['MALE','FEMALE']},
    DOB: {type: String, default: null},                                          //DD/MM/YYYY format
    codeUpdatedAt: {type: Date, default: Date.now, required: true},
    firstTimeLogin: {type: Boolean, default: false},
    registrationDate: {type: Date, default: Date.now, required: true},
    appVersion: {type: String},
    accessToken: {type: String, trim: true, index: true, unique: false, sparse: true},
    deviceToken: {type: String, trim: true, index: true, unique: false, sparse: true},
    deviceType: {
        type: String, enum: [
            Configuration.APP_CONSTANTS.DATABASE.DEVICE_TYPES.IOS,
            Configuration.APP_CONSTANTS.DATABASE.DEVICE_TYPES.ANDROID
        ]
    },
    phoneNo: {type: Number, default: null},
    passwordResetToken: {type: String, trim: true},
    loginType: {type: String, trim: true, sparse:true},
    VerificationToken : {type:String , default: null},
    Verify: {type:Boolean , default: true},
});

module.exports = mongoose.model('tempUsers', tempUser);