// 'use strict';
/**
 * Created by Ashvin on 21/12/17.
 */
const express    = require('express');
const router     = express.Router() 
const Controller = require('../Controllers');

//Live Router :
router.post('/api/admin/getManageItemList', async (req,res) => {
    console.log("GetManageItemList router call..........!",req.body);
    resData = await Controller.ItemController.getManageItemList(req.body) ;
    res.send(resData)
})
router.post('/api/admin/manageItemInsert', async (req,res) => {
    console.log("manageItemInsert router call..........!",req.body);
    resData = await Controller.ItemController.saveManageItem(req.body) ;
    console.log("manageItemInsert :resData.........!",resData);
    res.send(resData);
})
router.post('/api/admin/getManageItemDetails', async (req,res) => {
    console.log("getManageItemDetails router call..........!",req.body);
    resData = await Controller.ItemController.getSingleManageItem(req.body) ;
    console.log("getManageItemDetails :resData.........!",resData);
    res.send(resData);
})
module.exports  = router;