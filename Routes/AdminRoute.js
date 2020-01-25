// 'use strict';
/**
 * Created by Ashvin on 21/12/17.
 */
const express    = require('express');
const router     = express.Router() 
const Controller = require('../Controllers');

//Live Router :
router.post('/api/admin/login', async (req,res) => {
    console.log("Login router call..........!",req.body);
    resData = await Controller.AdminController.adminLogin(req.body) ;
    res.send(resData)
})

module.exports  = router;