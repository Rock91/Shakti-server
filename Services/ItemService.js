/**
 * Created by Ashvin on 13-01-2020
 * .
 */
var Models = require('../Models');
//Get Users from DB

var insertManageItem = function (objToSave) {
    new Models.ManageItems(objToSave).save()
    return new Promise((resolve,reject)=>{
        resolve(true);
    })
}
var getManageItem = async function (criteria, projection, options) {
    console.log("getManageItem :model call...........!");
    var getManageData = await Models.ManageItems.find(criteria, projection, options);
    console.log("getManageItem :getManageData---->",JSON.stringify(getManageData));
    return new Promise((resolve,reject)=>{
        resolve(getManageData);
    }) 
};
var getSingleManageItem = async function (criteria, projection, options) {
    console.log("getSingleManageItem :model call...........!");
    var getManageData = await Models.ManageItems.find(criteria, projection, options);
    console.log("getSingleManageItem :getManageData---->",JSON.stringify(getManageData));
    return new Promise((resolve,reject)=>{
        resolve(getManageData);
    }) 
};
module.exports = {
    getManageItem: getManageItem,
    insertManageItem:insertManageItem,
    getSingleManageItem:getSingleManageItem
}