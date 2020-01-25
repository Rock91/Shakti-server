/**
 * Created by Ashvin on 11/01/2020.
 */
'use strict';

var AdminRoute = require('./AdminRoute');
var ItemRoute = require('./ItemRoute');
var TestRoute  = require('./TestRoute');

var all = [].concat(AdminRoute);
all     = all.concat(ItemRoute);
all     = all.concat(TestRoute);

module.exports = all;
