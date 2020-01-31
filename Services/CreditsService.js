'use strict';

var Models = require('../Models');

//Get Workout from DB
var getCredit = function (criteria, projection, options, callback) {
    Models.Credits.find(criteria, projection, options, callback);
};

//Insert Workout in DB
var createCredit = function (objToSave, callback) {
    new Models.Credits(objToSave).save(callback)
};

//Update Workout in DB
var updateCredit = function (criteria, dataToSet, options, callback) {
    Models.Credits.findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete Workout in DB
var deleteCredit = function (criteria, callback) {
    Models.Credits.findOneAndRemove(criteria, callback);
};

var populateCreditData = function(criteria,projection,options,populate,populateOptions,callback){
    Models.Credits.find(criteria,projection,options).populate(populate,populateOptions).exec(callback);
};

module.exports = {
    getCredit: getCredit,
    createCredit: createCredit,
    updateCredit: updateCredit,
    deleteCredit: deleteCredit,
    populateCreditData: populateCreditData
};

