'use strict';
/**
 * Created by Ronak on 21/12/17.
 */
const express    = require('express');
const router     = express.Router() 
const Controller = require('../Controllers');
// var Controller = require('../Controllers');
var UniversalFunctions = require('../Utils/UniversalFunctions');
var joi = require('joi');
var Joi = require('joi');


//Live Router :

router.post('/api/Customer/Add', async (req,res) => {
    const request = req.body; 
    const schema = joi.object().keys({
        name:joi.string().required(),
        f_name:joi.string().required(),
        l_name:joi.string().required(),
        c_name:joi.string().required(),
        custo_type:joi.string().required(),
        ref_c:joi.string().required(),
        c_gen:joi.string().valid(['MALE','FEMAIL']).required(),
        email:joi.string().required() ,
        phone:joi.number().required() ,
        website:joi.string().required() ,
        bill_adr:joi.array().required().items(Joi.object().keys({
                                country: Joi.string().required(),
                                adr: Joi.string().required(),
                                city: Joi.string().required(),
                                zip: Joi.string().required(),
                                phone: Joi.string().required(),
                                fax: Joi.string().required(),
                 })),
        ship_adr:joi.array().items(Joi.object().keys({
                                country: Joi.string().required(),
                                adr: Joi.string().required(),
                                city: Joi.string().required(),
                                zip: Joi.string().required(),
                                phone: Joi.string().required(),
                                fax: Joi.string().required(),
                    })).required(),
        extra_cont:joi.array().items(Joi.object().keys({
                                name: Joi.string().required(),
                                adr: Joi.string().required(),
                                email: Joi.string().required(),
                                phone: Joi.string().required(),
                    })).optional(),
        other:joi.array().items(Joi.object().keys({
                    currency: Joi.string().required(),
                    open_bal: Joi.string().required(),
                    fb: Joi.string().optional(),
                    twitr: Joi.string().optional(),
        })).optional(),
        description:joi.string().required(),
        address:joi.string().required() ,
        email: joi.string().email().required()
    })
    const payload = joi.validate(request, schema)

    if(payload.error)
    {
        UniversalFunctions.failActionFunction(res,payload.error)
        return
    }
    
    var data = payload.value
    Controller.CustomerController.Addcustomer(data,function (err, data) {
                        if (err) {
                              UniversalFunctions.sendError(err)
                        } else {
                            UniversalFunctions.sendSuccess(null, data,res)
                       }
    // res.send(schema)
    })
    
})

router.post('/api/Customer/get', async (req,res) => {
    const request = req.body; 
    const schema = joi.object().keys({
        id:joi.string().required()})
    const payload = joi.validate(request, schema)

    if(payload.error)
    {
        UniversalFunctions.failActionFunction(res,payload.error)
        return
    }
    
    var data = payload.value
        Controller.CustomerController.getCustomer(data, function (err, data) {
            if (err) {
                UniversalFunctions.sendError(err)
        } else {
            UniversalFunctions.sendSuccess(null, data,res)
        }
    })
})

router.post('/api/Customer/searchCustomer', async (req,res) => {
    const request = req.body; 
    const schema = joi.object().keys({
        name:joi.string().required()})
    const payload = joi.validate(request, schema)

    if(payload.error)
    {
        UniversalFunctions.failActionFunction(res,payload.error)
        return
    }
    
    var data = payload.value
        Controller.CustomerController.searchCustomer(data, function (err, data) {
            if (err) {
                UniversalFunctions.sendError(err)
        } else {
            UniversalFunctions.sendSuccess(null, data,res)
        }
    })
})


router.post('/api/Customer/delCustomer', async (req,res) => {
    const request = req.body; 
    const schema = joi.object().keys({
        id:joi.string().required()})
    const payload = joi.validate(request, schema)

    if(payload.error)
    {
        UniversalFunctions.failActionFunction(res,payload.error)
        return
    }
    
    var data = payload.value
        Controller.CustomerController.delCustomer(data, function (err, data) {
            if (err) {
                UniversalFunctions.sendError(err)
        } else {
            UniversalFunctions.sendSuccess(null, data,res)
        }
    })
})

router.post('/api/Customer/updateCustomer', async (req,res) => {
    const request = req.body; 
    const schema = joi.object().keys({
        id: joi.string().required(),
        name:joi.string().optional(),
        f_name:joi.string().optional(),
        l_name:joi.string().optional(),
        c_name:joi.string().optional(),
        custo_type:joi.string().optional(),
        ref_c:joi.string().optional(),
        c_gen:joi.string().valid(['MALE','FEMAIL']).optional(),
        email:joi.string().optional() ,
        phone:joi.number().optional() ,
        website:joi.string().optional() ,
        bill_adr:joi.array().optional().items(Joi.object().keys({
                                country: Joi.string().required(),
                                adr: Joi.string().required(),
                                city: Joi.string().required(),
                                zip: Joi.string().required(),
                                phone: Joi.string().required(),
                                fax: Joi.string().required(),
                 })),
        ship_adr:joi.array().items(Joi.object().keys({
                                country: Joi.string().required(),
                                adr: Joi.string().required(),
                                city: Joi.string().required(),
                                zip: Joi.string().required(),
                                phone: Joi.string().required(),
                                fax: Joi.string().required(),
                    })).optional(),
        extra_cont:joi.array().items(Joi.object().keys({
                                name: Joi.string().required(),
                                adr: Joi.string().required(),
                                email: Joi.string().required(),
                                phone: Joi.string().required(),
                    })).optional(),
        other:joi.array().items(Joi.object().keys({
                    currency: Joi.string().required(),
                    open_bal: Joi.string().required(),
                    fb: Joi.string().optional(),
                    twitr: Joi.string().optional(),
        })).optional(),
        description:joi.string().optional(),
        address:joi.string().optional() ,
        email: joi.string().email().optional()
    })
    const payload = joi.validate(request, schema)

    if(payload.error)
    {
        UniversalFunctions.failActionFunction(res,payload.error)
        return
    }
    
    var data = payload.value
    Controller.CustomerController.editCustomer(data,function (err, data) {
                        if (err) {
                              UniversalFunctions.sendError(err)
                        } else {
                            UniversalFunctions.sendSuccess(null, data,res)
                       }
    // res.send(schema)
    })
    
})
module.exports = [
    router,
    // adminLogin,                                                           
]