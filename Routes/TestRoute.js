// 'use strict';
/**
 * Created by Ashvin on 21/12/17.
 */

const express = require('express');
const router = express.Router() 

router.get('/',(req,res)=>{
    console.log("Test router call...***.......!");
    res.send('Ok')
}) 

module.exports = router; 