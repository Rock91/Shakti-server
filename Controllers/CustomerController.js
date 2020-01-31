var Service = require('../Services');
var _ = require('underscore');

CommanController = module.exports = require('./CommanController.js')

var Addcustomer = async function (data ,callback) {
    var dataToSave = data
    // console.log("\nUser Controller ..!",dataToSave);

    Service.CustomerService.createCustomer(dataToSave,(err,result)=>{
        console.log("resulted data --->",result)
        callback(null,result)
     }
    )
}

var getCustomer = async function (data ,callback) {

    var criteria = {
        _id: data.id
    };
    var projection = {};
    var option = {
        lean: true
    };

    Service.CustomerService.getCustomer(criteria, projection, option, function (err, result) {
        console.log("resulted data --->",result)
        callback(null,result)
     }
    )
}

var searchCustomer = async function (data ,callback) {

    var term = new RegExp(data.name)
    criteria =
        {$or : [
            {
                name: {
                    $regex: term,
                    $options: 'i'
                }
            },
            {
                f_name: {
                    $regex: term,
                    $options: 'i'
                }
            },
            {
                l_name: {
                    $regex: term,
                    $options: 'i'
                }
            }
        ]}
    var projection = {};
    var option = {
        lean: true
    };

    Service.CustomerService.getCustomer(criteria, projection, option, function (err, result) {
        console.log("resulted data --->",result)
        callback(null,result)
     }
    )
}

var delCustomer = async function (data ,callback) {

    var criteria = {
        _id: data.id
    };
    var setQuery = {
       isdel : true
    };
    var option = {
        new: true
    };

    Service.CustomerService.updateCustomer(criteria, setQuery, option, function (err, result) {
        console.log("resulted data --->",result)
        callback(null,result)
     }
    )
}

editCustomer = async function (payloadData ,callback) {

    var criteria = {
        _id: payloadData.id
    };
    var dataToSave = {};
    if (_.has(payloadData, 'name') && payloadData.name != "") {
        dataToSave.name = payloadData.name;
    }
    if (_.has(payloadData, 'f_name') && payloadData.f_name != "") {
        dataToSave.f_name = payloadData.f_name;
    }
    if (_.has(payloadData, 'l_name') && payloadData.l_name != "") {
        dataToSave.l_name = payloadData.l_name;
    }
    if (_.has(payloadData, 'c_name') && payloadData.c_name != "") {
        dataToSave.c_name = payloadData.c_name;
    }
    if (_.has(payloadData, 'custo_type') && payloadData.custo_type != "") {
        dataToSave.custo_type = payloadData.custo_type;
    }
    if (_.has(payloadData, 'ref_c') && payloadData.ref_c != "") {
        dataToSave.ref_c = payloadData.ref_c;
    }
    if (_.has(payloadData, 'c_gen') && payloadData.c_gen != "") {
        dataToSave.c_gen = payloadData.c_gen;
    }
    if (_.has(payloadData, 'email') && payloadData.email != "") {
        dataToSave.email = payloadData.email;
    }
    if (_.has(payloadData, 'phone') && payloadData.phone != "") {
        dataToSave.phone = payloadData.phone;
    }
    if (_.has(payloadData, 'website') && payloadData.website != "") {
        dataToSave.website = payloadData.website;
    }
    if (_.has(payloadData, 'bill_adr') && payloadData.bill_adr != "") {
        dataToSave.bill_adr = payloadData.bill_adr;
    }
    if (_.has(payloadData, 'ship_adr') && payloadData.ship_adr != "") {
        dataToSave.ship_adr = payloadData.ship_adr;
    }
    if (_.has(payloadData, 'other') && payloadData.other != "") {
        dataToSave.other = payloadData.other;
    }
    if (_.has(payloadData, 'extra_cont') && payloadData.extra_cont != "") {
        dataToSave.extra_cont = payloadData.extra_cont;
    }
    if (_.has(payloadData, 'description') && payloadData.description != "") {
        dataToSave.description = payloadData.description;
    }
    if (_.has(payloadData, 'address') && payloadData.address != "") {
        dataToSave.address = payloadData.address;
    }
    
    var option = {
        new: true
    };
    Service.CustomerService.updateCustomer(criteria, dataToSave, option, function (err, result) {
        console.log("resulted data --->",result)
        callback(null,result)
     }
    )
}
module.exports = {
     Addcustomer: Addcustomer,
     getCustomer: getCustomer,
     searchCustomer: searchCustomer,
     delCustomer: delCustomer,
     editCustomer: editCustomer
}