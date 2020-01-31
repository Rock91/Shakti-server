'use strict';

var Models = require('../Models');

//Insert createevent in DB

var createWarehouse = function (objToSave, callback) {

    new Models.Warehouse(objToSave).save(callback)
}
var editWarehouse =  function (criteria, dataToSet, options, callback) {

    Models.Warehouse.findOneAndUpdate(criteria, dataToSet, options, callback)
}

var getallWarehouse = function (criteria, projection, options, callback) {

    Models.Warehouse.find(criteria, projection, options, callback)
}
var getoneWarehouse = function (criteria, projection, options, callback) {
    Models.Warehouse.find(criteria, projection, options, callback);
};

var delWarehouse = function (criteria, callback) {
    Models.Warehouse.findOneAndRemove(criteria, callback);
};


module.exports = {
    createWarehouse: createWarehouse,
    editWarehouse: editWarehouse,
    getallWarehouse: getallWarehouse,
    getoneWarehouse: getoneWarehouse,
    delWarehouse: delWarehouse,
};