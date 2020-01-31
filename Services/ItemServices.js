'use strict';

var Models = require('../Models');

//Insert createevent in DB

var createItem = function (objToSave, callback) {

    new Models.Item(objToSave).save(callback)
}
var editItem =  function (criteria, dataToSet, options, callback) {

    Models.Item.findOneAndUpdate(criteria, dataToSet, options, callback)
}

var getallItem = function (criteria, projection, options, callback) {

    Models.Item.find(criteria, projection, options, callback)
}
var getoneItem = function (criteria, projection, options, callback) {
    Models.Item.find(criteria, projection, options, callback);
};

var delItem = function (criteria, callback) {
    Models.Item.findOneAndRemove(criteria, callback);
};


module.exports = {
    createItem: createItem,
    editItem: editItem,
    getallItem: getallItem,
    getoneItem: getoneItem,
    delItem: delItem,
};