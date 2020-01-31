'use strict';
var path = require('path');
var iOSPushSettings = {
    iosApnCertificate : path.resolve('.')+'/certs/FittEverDevPush.pem',
    gateway : 'gateway.sandbox.push.apple.com'
};

module.exports = {
    iOSPushSettings: iOSPushSettings
};
