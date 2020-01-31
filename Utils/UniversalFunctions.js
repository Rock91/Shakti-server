/**
 * Created by Zubin on 21/12/17.
 */
var Joi = require('joi');
var async = require('async');
var MD5 = require('md5');
var Boom = require('boom');
var CONFIG = require('../Configuration');
var Models = require('../Models');
var randomstring = require("randomstring");
// var GeoPoint = require('geopoint');
// var distance = require('google-distance-matrix');
// distance.key(CONFIG.APP_CONSTANTS.SERVER.GOOGLE_API_KEY);
// var NotificationManager = require('../../Project/Go-Out ALL Back up/go-out-release-2.0/Lib/NotificationManager');
var validator = require('validator');
var moment = require('moment');


var VALID_ERRAND_STATUS_ARRAY = [];
for (var key in CONFIG.APP_CONSTANTS.DATABASE.ERRANDS_STATUS) {
    if (CONFIG.APP_CONSTANTS.DATABASE.ERRANDS_STATUS.hasOwnProperty(key)) {
        VALID_ERRAND_STATUS_ARRAY.push(CONFIG.APP_CONSTANTS.DATABASE.ERRANDS_STATUS[key])
    }
}

var calculateDeliveryCost = function (originLatlong, destLatLong, callback) {
    var estimatedCost = CONFIG.APP_CONSTANTS.SERVER.BASE_DELIVERY_FEE;
    calculateDistanceViaGoogleDistanceMatrix(originLatlong,destLatLong, function (err, distanceInMiles) {
        console.log('distances',err,distanceInMiles)
        if (err){
            callback(err)
        }else {
            distanceInMiles = distanceInMiles && distanceInMiles.toFixed() || 0;
            estimatedCost = estimatedCost +distanceInMiles * CONFIG.APP_CONSTANTS.SERVER.COST_PER_KM;
            callback(null, estimatedCost)
        }
    })
};

var calculateDistanceViaGoogleDistanceMatrix = function (origin, destination, callback) {
    var origins = [origin];
    var destinations = [destination];
    var duration = null;

    distance.matrix(origins, destinations, function (err, distances) {
        if (err){
            callback(err)
        }else if (distances.status == 'OK' && distances.rows && distances.rows[0] && distances.rows[0].elements
            && distances.rows[0].elements[0] && distances.rows[0].elements[0].duration && distances.rows[0].elements[0].duration.hasOwnProperty('value')) {
            duration = (distances.rows[0].elements[0].duration.value)/60;
        }
        callback(null,duration);
    });
};

var sendError = function (data, reply) {
    if(data.statusCode = undefined)
    {data.statusCode = 400}
    reply.status(data.statusCode).send(data)
};


var sendSuccess = function (successMsg, data,reply) {
    var successMsg = successMsg || CONFIG.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT.customMessage;
        data = {statusCode:200, message: successMsg, data: data || null};
        reply.send(data)

    // }
};

var checkDuplicateValuesInArray = function (array) {
    console.log('array',array)
    var storeArray = [];
    var duplicateFlag = false;
    if(array && array.length>0){
        for (var i=0; i<array.length;i++){
            if (storeArray.indexOf(array[i]) == -1){
                console.log('push',array[i])
                storeArray.push(array[i])
            }else {
                console.log('break')
                duplicateFlag = true;
                break;
            }
        }
    }
    storeArray = [];
    return duplicateFlag;
};

var failActionFunction = function (reply, error) {
    console.log("\n-error-->",error.details)
    var errorMSG = error.details[0].message;
    var data = {
        statusCode:400,
        data:error.details[0].context.key
    }
    data.message = errorMSG.toString().replace(/\\/g,' ')
    
    return reply.status(400).send(data)
};

var customQueryDataValidations = function (type,key, data, callback) {
    var schema = {};
    switch(type){
        case 'PHONE_NO' : schema[key] = Joi.string().regex(/^[0-9]+$/).length(10);
            break;
        case 'NAME' : schema[key] = Joi.string().regex(/^[a-zA-Z ]+$/).min(2);
            break;
        case 'BOOLEAN' : schema[key] = Joi.boolean();
            break;
    }
    var value = {};
    value[key] = data;

    Joi.validate(value, schema, callback);
};

var authorizationHeaderObj = Joi.object({
    authorization: Joi.string().required()
}).unknown();

var getEmbeddedDataFromMongo = function (dataAry, keyToSearch, referenceIdToSearch, embeddedFieldModelName, variableToAttach, callback) {
    if (!dataAry || !keyToSearch || !variableToAttach || !embeddedFieldModelName || !Models[embeddedFieldModelName]) {
        callback(CONFIG.APP_CONSTANTS.STATUS_MSG.ERROR.IMP_ERROR)
    } else {
        if (dataAry.length > 0) {
            var taskToRunInParallel = [];
            dataAry.forEach(function (dataObj) {
                taskToRunInParallel.push((function (dataObj) {
                    return function (embeddedCB) {
                        if (!dataObj[referenceIdToSearch]) {
                            callback(CONFIG.APP_CONSTANTS.STATUS_MSG.ERROR.IMP_ERROR)
                        } else {
                            var criteria = {};
                            criteria[keyToSearch] = dataObj[referenceIdToSearch];
                            Models[embeddedFieldModelName].find(criteria, function (err, modelDataAry) {
                                if (err) {
                                    embeddedCB(err)
                                } else {
                                    if (modelDataAry) {
                                        dataObj[variableToAttach] = modelDataAry
                                    }
                                    embeddedCB()
                                }
                            })
                        }

                    }
                })(dataObj));
            });

            async.parallel(taskToRunInParallel, function (err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(null, dataAry)
                }
            })

        } else {
            callback(null, dataAry)
        }
    }
};

var CryptData = function (stringToCrypt) {
    return MD5(MD5(stringToCrypt));
};

var generateRandomString = function () {
    return randomstring.generate(7);
};

var filterArray = function (array) {
    return array.filter(function (n) {
        return n != undefined && n != ''
    });
};

var sanitizeName = function (string) {
    return filterArray(string && string.split(' ') || []).join(' ')
};

var verifyEmailFormat = function (string) {
    return validator.isEmail(string)
};

var getVideoFileNameWithUserId = function (thumbFlag, fullFileName, userId) {
    var prefix = CONFIG.APP_CONSTANTS.DATABASE.DEMO_VIDEO_PREFIX;
    var ext = fullFileName && fullFileName.length > 0 && fullFileName.substr(fullFileName.lastIndexOf('.') || 0, fullFileName.length);
    return prefix + userId + '_' + new Date().getMilliseconds() + ext;
};

var getFileNameWithUserId = function (thumbFlag, fullFileName, userId) {
        var prefix = CONFIG.APP_CONSTANTS.DATABASE.PROFILE_PIC_PREFIX.ORIGINAL;
        var ext = fullFileName && fullFileName.length > 0 && fullFileName.substr(fullFileName.lastIndexOf('.') || 0, fullFileName.length);
        if (thumbFlag) {
            prefix = CONFIG.APP_CONSTANTS.DATABASE.PROFILE_PIC_PREFIX.THUMB;
        }
        return prefix + userId + '_' + moment().format('DDMMYYYYHHmmss') + ext;
};

var getFileNameWithUserId2 = function (thumbFlag, fullFileName, userId) {
        var prefix = CONFIG.APP_CONSTANTS.DATABASE.PROFILE_PIC.ORIGINAL;
        var ext = fullFileName && fullFileName.length > 0 && fullFileName.substr(fullFileName.lastIndexOf('.') || 0, fullFileName.length);
        if (thumbFlag) {
            prefix = CONFIG.APP_CONSTANTS.DATABASE.PROFILE_PIC.THUMB;
        }
        return prefix + userId + '_' + moment().format('DDMMYYYYHHmmss') + ext;
};

var getStreamedVideoFileNameWithUserId = function (thumbFlag, fullFileName, userId) {
    var prefix = CONFIG.APP_CONSTANTS.DATABASE.STREAMED_VIDEO_PREFIX;
    var ext = fullFileName && fullFileName.length > 0 && fullFileName.substr(fullFileName.lastIndexOf('.') || 0, fullFileName.length);
    return prefix + userId + '_' + new Date().getMilliseconds() + ext;
};

var getFileNameWithUserIdWithCustomPrefix = function (thumbFlag, fullFileName,type, userId) {
    var prefix = '';
    if (type == CONFIG.APP_CONSTANTS.DATABASE.FILE_TYPES.LOGO){
        prefix = CONFIG.APP_CONSTANTS.DATABASE.LOGO_PREFIX.ORIGINAL;
    }else if (type == CONFIG.APP_CONSTANTS.DATABASE.FILE_TYPES.DOCUMENT){
        prefix = CONFIG.APP_CONSTANTS.DATABASE.DOCUMENT_PREFIX;
    }
    var ext = fullFileName && fullFileName.length > 0 && fullFileName.substr(fullFileName.lastIndexOf('.') || 0, fullFileName.length);
    if (thumbFlag && type == CONFIG.APP_CONSTANTS.DATABASE.FILE_TYPES.LOGO) {
        prefix = CONFIG.APP_CONSTANTS.DATABASE.LOGO_PREFIX.THUMB;
    }
    return prefix + userId + '_' + new Date() + ext;
};

var getDistanceBetweenPoints = function (origin, destination) {
    var start = new GeoPoint(origin.lat, origin.long);
    var end = new GeoPoint(destination.lat, destination.long);
    return  start.distanceTo(end, true);
};

var validateLatLongValues = function (lat, long) {
    var valid = true;
    if (lat < -90 || lat>90){
        valid = false;
    }
    if (long <-180 || long > 180){
        valid = false;
    }
    return valid;
};

var deleteUnnecessaryUserData = function (userObj) {
    console.log('deleting>>',userObj)
    delete userObj['__v'];
    delete userObj['password'];
    delete userObj['emailVerificationToken'];
    delete userObj['passwordResetToken'];
    delete userObj['registrationDate'];
    delete userObj['OTPCode'];
    delete userObj['facebookId'];
    delete userObj['codeUpdatedAt'];
    delete userObj['deviceType'];
    delete userObj['deviceToken'];
    delete userObj['appVersion'];
    delete userObj['isBlocked'];
    console.log('deleted',userObj)
    return userObj;
};


var parseExcel = function(excelFile,callback){
    require('excel').default(excelFile).then(function (data) {
        callback(null,data);
    }).catch(function (err) {
        callback(err);
    })
};


module.exports = {
    sendError: sendError,
    sendSuccess: sendSuccess,
    calculateDeliveryCost: calculateDeliveryCost,
    checkDuplicateValuesInArray: checkDuplicateValuesInArray,
    CryptData: CryptData,
    failActionFunction: failActionFunction,
    // NotificationManager: NotificationManager,
    authorizationHeaderObj: authorizationHeaderObj,
    getEmbeddedDataFromMongo: getEmbeddedDataFromMongo,
    verifyEmailFormat: verifyEmailFormat,
    sanitizeName: sanitizeName,
    deleteUnnecessaryUserData: deleteUnnecessaryUserData,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    validateLatLongValues: validateLatLongValues,
    filterArray: filterArray,
    CONFIG: CONFIG,
    VALID_ERRAND_STATUS_ARRAY: VALID_ERRAND_STATUS_ARRAY,
    generateRandomString: generateRandomString,
    getFileNameWithUserId : getFileNameWithUserId,
    getFileNameWithUserId2 : getFileNameWithUserId2,
    getFileNameWithUserIdWithCustomPrefix : getFileNameWithUserIdWithCustomPrefix,
    customQueryDataValidations : customQueryDataValidations,
    getVideoFileNameWithUserId: getVideoFileNameWithUserId,
    getStreamedVideoFileNameWithUserId: getStreamedVideoFileNameWithUserId,
    parseExcel: parseExcel
};