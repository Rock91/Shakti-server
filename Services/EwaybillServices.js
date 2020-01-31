'use strict';


var Models = require('../Models');


//Insert createevent in DB

var createEwaybill = function (objToSave, callback) {

    new Models.Ewaybill(objToSave).save(callback)
}
var editEwaybill =  function (criteria, dataToSet, options, callback) {

    Models.Ewaybill.findOneAndUpdate(criteria, dataToSet, options, callback)
}

var getallEwaybill = function (criteria, projection, options, callback) {

    Models.Ewaybill.find(criteria, projection, options, callback)
}
var getoneEwaybill = function (criteria, projection, options, callback) {
    Models.Ewaybill.find(criteria, projection, options, callback);
};

var delEwaybill = function (criteria, callback) {
    Models.Ewaybill.findOneAndRemove(criteria, callback);
};


module.exports = {
    createEwaybill: createEwaybill,
    editEwaybill: editEwaybill,
    getallEwaybill: getallEwaybill,
    getoneEwaybill: getoneEwaybill,
    delEwaybill: delEwaybill,
};