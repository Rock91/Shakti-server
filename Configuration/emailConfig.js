'use strict';
var nodeMailer = {
    "Gmail" : {
        service: "Gmail",
        secureConnection: true,
        port: 465,
        auth: {
            user: "partners@lcvenue.com",
            pass: "4nyVgQ@llcvenues"
        }
    // "Gmail" : {
    //         service: "smtp.mailgun.org",
    //         secureConnection: true,
    //         port: 587 ,
    //         auth: {
    //             user: "postmaster@sandbox996413bd338f4a1f8ed41777f564eacf.mailgun.org",
    //             pass: "a6de98ba82b3722f45e0c1a91f9a73b3-2dfb0afe-76c2d989"
    //         }   
    }
}
module.exports = {
    nodeMailer: nodeMailer
};
