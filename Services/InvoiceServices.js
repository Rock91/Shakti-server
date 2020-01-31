'use strict';


var Models = require('../Models');


//Insert createevent in DB

var createInvoice = function (objToSave, callback) {

    new Models.Invoice(objToSave).save(callback)
}
var editInvoice =  function (criteria, dataToSet, options, callback) {

    Models.Invoice.findOneAndUpdate(criteria, dataToSet, options, callback)
}

var getallInvoice = function (criteria, projection, options, callback) {

    Models.Invoice.find(criteria, projection, options, callback)
}
var getoneInvoice = function (criteria, projection, options, callback) {
    Models.Invoice.find(criteria, projection, options, callback);
};

var delInvoice = function (criteria, callback) {
    Models.Invoice.findOneAndRemove(criteria, callback);
};


module.exports = {
    createInvoice: createInvoice,
    editInvoice: editInvoice,
    getallInvoice: getallInvoice,
    getoneInvoice: getoneInvoice,
    delInvoice: delInvoice,
};