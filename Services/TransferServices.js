'use strict';

var Models = require('../Models');

//Insert createevent in DB

var createTransfer = function (objToSave, callback) {

    new Models.Transfer(objToSave).save(callback)
}
var editTransfer =  function (criteria, dataToSet, options, callback) {

    Models.Transfer.findOneAndUpdate(criteria, dataToSet, options, callback)
}

var getallTransfer = function (criteria, projection, options, callback) {

    Models.Transfer.find(criteria, projection, options, callback)
}
var getoneTransfer = function (criteria, projection, options, callback) {
    Models.Transfer.find(criteria, projection, options, callback);
};

var delTransfer = function (criteria, callback) {
    Models.Transfer.findOneAndRemove(criteria, callback);
};


module.exports = {
    createTransfer: createTransfer,
    editTransfer: editTransfer,
    getallTransfer: getallTransfer,
    getoneTransfer: getoneTransfer,
    delTransfer: delTransfer,
};