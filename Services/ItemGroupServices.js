'use strict';

var Models = require('../Models');

//Insert createevent in DB

var createInvoiceGroup = function (objToSave, callback) {

    new Models.InvoiceGroup(objToSave).save(callback)
}
var editInvoiceGroup =  function (criteria, dataToSet, options, callback) {

    Models.InvoiceGroup.findOneAndUpdate(criteria, dataToSet, options, callback)
}
var updateOffers = function (criteria, dataToSet, options, callback) {
    Models.InvoiceGroup.findOneAndUpdate(criteria, dataToSet, options, callback);
};
var getallInvoiceGroup = function (criteria, projection, options, callback) {

    Models.InvoiceGroup.find(criteria, projection, options, callback)
}
var getoneInvoiceGroup = function (criteria, projection, options, callback) {
    Models.InvoiceGroup.find(criteria, projection, options, callback);
};

var delInvoiceGroup = function (criteria, callback) {
    Models.InvoiceGroup.findOneAndRemove(criteria, callback);
};


module.exports = {
    createInvoiceGroup: createInvoiceGroup,
    editInvoiceGroup: editInvoiceGroup,
    getallInvoiceGroup: getallInvoiceGroup,
    getoneInvoiceGroup: getoneInvoiceGroup,
    delInvoiceGroup: delInvoiceGroup,
};