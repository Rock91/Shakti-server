'use strict';

var Models = require('../Models');

//Get Workout from DB
var getCustomer = function (criteria, projection, options, callback) {
    criteria.isdel = false
    Models.Customer.find(criteria, projection, options, callback);
};

//Insert Workout in DB
var createCustomer = function (objToSave, callback) {
    new Models.Customer(objToSave).save(callback)
};

//Update Workout in DB
var updateCustomer = function (criteria, dataToSet, options, callback) {
    Models.Customer.findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete Workout in DB
var deleteCustomer = function (criteria, callback) {
    Models.Customer.findOneAndRemove(criteria, callback);
};

var populateCustomerData = function(criteria,projection,options,populate,populateOptions,callback){
    Models.Customer.find(criteria,projection,options).populate(populate,populateOptions).exec(callback);
};

var countCustomer = function (criteria, callback) {
    Models.Customer.count(criteria, callback);
};

module.exports = {
    getCustomer: getCustomer,
    createCustomer: createCustomer,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer,
    populateCustomerData: populateCustomerData,
    countCustomer: countCustomer
};

