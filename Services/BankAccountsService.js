'use strict';

var Models = require('../Models');

//Get Workout from DB
var getBankAccounts = function (criteria, projection, options, callback) {
    Models.BankAccounts.find(criteria, projection, options, callback);
};

//Insert Workout in DB
var createBankAccounts = function (objToSave, callback) {
    new Models.BankAccounts(objToSave).save(callback)
};

//Update Workout in DB
var updateBankAccounts = function (criteria, dataToSet, options, callback) {
    Models.BankAccounts.findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete Workout in DB
var deleteBankAccounts = function (criteria, callback) {
    Models.BankAccounts.findOneAndRemove(criteria, callback);
};

var populateBankAccountsData = function(criteria,projection,options,populate,populateOptions,callback){
    Models.BankAccounts.find(criteria,projection,options).populate(populate,populateOptions).exec(callback);
};

module.exports = {
    getBankAccounts: getBankAccounts,
    createBankAccounts: createBankAccounts,
    updateBankAccounts: updateBankAccounts,
    deleteBankAccounts: deleteBankAccounts,
    populateBankAccountsData: populateBankAccountsData
};

