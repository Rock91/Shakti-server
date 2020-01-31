'use strict';

var Models = require('../Models');

//Get Workout from DB
var getEstimate = function (criteria, projection, options, callback) {
    Models.Estimate.find(criteria, projection, options, callback);
};

//Insert Workout in DB
var createEstimate = function (objToSave, callback) {
    new Models.Estimate(objToSave).save(callback)
};

//Update Workout in DB
var updateEstimate = function (criteria, dataToSet, options, callback) {
    Models.Estimate.findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete Workout in DB
var deleteEstimate = function (criteria, callback) {
    Models.Estimate.findOneAndRemove(criteria, callback);
};

var populateEstimateData = function(criteria,projection,options,populate,populateOptions,callback){
    Models.Estimate.find(criteria,projection,options).populate(populate,populateOptions).exec(callback);
};

var aggregateEstimate = function (criteria, callback) {
    Models.Estimate.aggregate(criteria,callback);
    //  var stream = Models.Estimate
    //     .aggregate(criteria,{ batchSize: 1000 }).exec();
    //  // console.log('stream',stream);
    // stream.on('data', function(doc) {
    //     callback(null,doc);
    // });
};

module.exports = {
    getEstimate: getEstimate,
    createEstimate: createEstimate,
    updateEstimate: updateEstimate,
    deleteEstimate: deleteEstimate,
    populateEstimateData: populateEstimateData,
    aggregateEstimate : aggregateEstimate
};

