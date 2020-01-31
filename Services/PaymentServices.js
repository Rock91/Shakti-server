'use strict';

var Models = require('../Models');

//Insert createevent in DB

var createPayment = function (objToSave, callback) {

    new Models.Payment(objToSave).save(callback)
}
var editPayment =  function (criteria, dataToSet, options, callback) {

    Models.Payment.findOneAndUpdate(criteria, dataToSet, options, callback)
}

var getallPayment = function (criteria, projection, options, callback) {

    Models.Payment.find(criteria, projection, options, callback)
}
var getonePayment = function (criteria, projection, options, callback) {
    Models.Payment.find(criteria, projection, options, callback);
};

var delPayment = function (criteria, callback) {
    Models.Payment.findOneAndRemove(criteria, callback);
};


module.exports = {
    createPayment: createPayment,
    editPayment: editPayment,
    getallPayment: getallPayment,
    getonePayment: getonePayment,
    delPayment: delPayment,
};