'use strict';

var Models = require('../Models');

//Get Users from DB
var getUser = function (criteria, projection, options, callback) {
    Models.tempUsers.find(criteria, projection, options, callback);
};


//Get All Generated Codes from DB
var getAllGeneratedCodes = function (callback) {
    var criteria = {
        OTPCode : {$ne : null}
    };
    var projection = {
        OTPCode : 1
    };
    var options = {
        lean : true
    };
    Models.tempUsers.find(criteria,projection,options, function (err, dataAry) {
        if (err){
            callback(err)
        }else {
            var generatedCodes = [];
            if (dataAry && dataAry.length > 0){
                dataAry.forEach(function (obj) {
                    generatedCodes.push(obj.OTPCode.toString())
                });
            }
            callback(null,generatedCodes);
        }
    })
};

//Insert User in DB
var createUser = function (objToSave, callback) {
    new Models.tempUsers(objToSave).save(callback)
};

//Update User in DB
var updateUser = function (criteria, dataToSet, options, callback) {
    Models.tempUsers.findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete User in DB
var deleteUser = function (criteria, callback) {
    Models.tempUsers.findOneAndRemove(criteria, callback);
};

var countUser = function (criteria, callback) {
    Models.tempUsers.count(criteria, callback);
};


module.exports = {
    getUser: getUser,
    getAllGeneratedCodes: getAllGeneratedCodes,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createUser: createUser,
    countUser: countUser
};

