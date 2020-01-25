var Service = require('../Services');
CommanController = module.exports = require('./CommanController.js')
var adminLogin = async function (data) {
    console.log("\nadminLogin : Controller call......!",);
    var criteria = {
        name:data.username
    };
    var projection = {};
    var options = {};
    
    var adminData = await Service.AdminService.getAdmin(criteria,projection,options); 
    console.log("adminLogin : adminData -- >",JSON.stringify(adminData));

    return new Promise((resolve,reject)=>{
        if(adminData.length == 0) {
            resData = CommanController.GetFinalData("adminLogin",{},'error:0008');
            resolve(resData);
        }
        if(data.password != adminData[0].password){
            resData = CommanController.GetFinalData("adminLogin",{},'error:0009');
            resolve(resData);
        }
        resData = CommanController.GetFinalData("adminLogin",{uid: adminData[0]._id});
        resolve(resData);
    })
}
module.exports = {
    adminLogin: adminLogin
}