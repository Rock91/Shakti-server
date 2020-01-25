/**
 * Created by Ashvin on 12-01-2020
 * .
 */
var Models = require('../Models');
//Get Users from DB
var getAdmin = async function (criteria, projection, options) {
    console.log("getAmin :model call...........!");
    var adminData = await Models.Admins.find(criteria, projection, options);
    console.log("getAmin :adminData---->",JSON.stringify(adminData));
    return new Promise((resolve,reject)=>{
        resolve(adminData);
    }) 
};
module.exports = {
    getAdmin: getAdmin
}