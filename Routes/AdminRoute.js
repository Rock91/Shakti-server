// 'use strict';
/**
 * Created by Ashvin on 21/12/17.
 */
const express    = require('express');
const router     = express.Router() 
const Controller = require('../Controllers');
// var Controller = require('../Controllers');
var UniversalFunctions = require('../Utils/UniversalFunctions');
var joi = require('joi');

//Live Router :
router.post('/api/admin/login', async (req,res) => {
    console.log("Login router call..........!",req.body);
    resData = await Controller.AdminController.adminLogin(req.body) ;
    res.send(resData)
})

router.post('/api/admin/customer', async (req,res) => {
    const request = req.body; 
    const schema = joi.object().keys({
        email: joi.string().email().optional()
    })
    const payload = joi.validate(request, schema)

    if(payload.error)
    {
        UniversalFunctions.failActionFunction(res,payload.error)
        return
    }
    
    getdata = payload.validate
    Controller.AdminController.adminLogin(getdata,function (err, data) {
                        if (err) {
                              UniversalFunctions.sendError(err)
                        } else {
                            UniversalFunctions.sendSuccess(null, data[0].res)
                       }
    // res.send(schema)
    })
    
})



module.exports  = router;

module.exports = [
    router,
    // adminLogin,                                                           
]