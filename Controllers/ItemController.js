var Service = require('../Services');
CommanController = module.exports = require('./CommanController.js')
var getManageItemList = async function (data) {
    console.log("\ngetManageItemList : Controller call......!",);
    var criteria = {};
    var projection = {};
    var options = {};
    
    var ManageItemsData = await Service.ItemService.getManageItem(criteria,projection,options); 
    console.log("getManageItemList : ManageItemsData -- >",JSON.stringify(ManageItemsData));

    return new Promise((resolve,reject)=>{
        
        resData = CommanController.GetFinalData("getManageItemList",ManageItemsData);
        resolve(resData);
    })
}
var getSingleManageItem = async function (data) {
    console.log("\ngetSingleManageItem : Controller call......!",);
    var criteria = {
        _id:MongoId(data._id.toString())
    };
    var projection = {};
    var options = {};
    
    var ManageItemsData = await Service.ItemService.getSingleManageItem(criteria,projection,options); 
    console.log("getSingleManageItem : ManageItemsData -- >",JSON.stringify(ManageItemsData));

    return new Promise((resolve,reject)=>{
        
        resData = CommanController.GetFinalData("getManageItemList",ManageItemsData);
        resolve(resData);
    })
}
var saveManageItem = async function (data) {
    console.log("\n saveManageItem : Controller call......!",);
   
    var ManageItemsData = await Service.ItemService.insertManageItem(data); 
    console.log("saveManageItem : ManageItemsData -- >",JSON.stringify(ManageItemsData));

    return new Promise((resolve,reject)=>{
        
        resData = CommanController.GetFinalData("saveManageItem",ManageItemsData);
        resolve(resData);
    })
}
module.exports = {
    getManageItemList: getManageItemList,
    saveManageItem:saveManageItem,
    getSingleManageItem:getSingleManageItem
}