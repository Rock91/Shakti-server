'use strict';
var dataCodesArr = { // All errors are listed here with their codes
    'error:0001': {
        Message: "Error",
        Title: "Record not found."
    },
    /*'error:0001': {
        Message: "Error",
        Title: "Something goes wrong."
    },*/
    'error:0002': {
        Message: "Duplicate Mobile",
        Title: "This mobile number is already registered."
    },
    'error:0003': {
        Message: "This email is already registered, please go to Login",
        Title: "This email is already registered, please go to Login"
    },
    'error:0004': {
        Message: "Blank Field",
        Title: "Some Registration Details Missing."
    },
    'error:0005': {
        Message: "Invalid Referral",
        Title: "Referral code is invalid."
    },
    'error:0006': {
        Message: "Referral Used",
        Title: "Referral code is already used by another user."
    },
    'error:0007': {
        Message: "Invalid OTP",
        Title: "Entered OTP is Invalid."
    },
    'error:0008': {
        Message: "Account Not Found",
        Title: "Create New Account or choose 'Forgot Password'"
    },
    'error:0009': {
        Message: "Incorrect Username or Password.",
        Title: "Incorrect Email or Password."
    },
    'error:0010': {
        Message: "Link Used",
        Title: "Recovery link invalid, go to 'Change Password'"
    },
    'error:0011': {
        Message: "OTP Used",
        Title: "OTP expired, go to 'Resend OTP'"
    },
    'error:0012': {
        Message: "Invalid Referral Code",
        Title: "Please Check Invite Code or Request a new one."
    },
    'error:0013': {
        Message: "Referral Used",
        Title: "Invite Code Expired, please Request a new one."
    },
    'error:0014': {
        Message: "CheckIn Not Found",
        Title: "CheckIn details are not found."
    },
    'error:0015': {
        Message: "Invalid Recovery Link",
        Title: "Recovery link invalid, go to 'Change Password'"
    },
    'error:0016': {
        Message: "User Blocked",
        Title: "User has disabled this communication."
    },
    'error:0017': {
        Message: "User Blocked",
        Title: "Multiple Logins Found. Please log out from all other devices."
    },
    'error:0018': {
        Message: "User Blocked",
        Title: "Unable to add as Travel Buddy."
    },
    'error:0019': {
        Message: "Old Password Mismatch",
        Title: "Old Password is incorrect."
    },
    'error:0020': {
        Message: "Referral Code Limit Exceeded",
        Title: "Invite Code Limit Exceeded."
    },
    'error:0021': {
        Message: "Age Error",
        Title: "Age must be greater than or equal to 18 years."
    },
    'error:0022': {
        Message: "Block Error",
        Title: "Unable to get rating."
    },
    'error:0023': {
        Message: "Block Error",
        Title: "Unable to rate the buddy."
    },
    'error:0024': {
        Message: "Block Error",
        Title: "You are not still buddies."
    },
    'error:0025': {
        Message: "Name Error",
        Title: "Please select appropriate name."
    },
    'error:0026': {
        Message: "Change Name Error",
        Title: "You can't change your name."
    },
    'error:0027': {
        Message: "COMING SOON!",
        Title: "Looks like Solopacker is yet to launch in your region"
    },
    'error:0028': {
        Message: "Contact Number Error",
        Title: "Please enter valid contact number"
    },
    'error:0029': {
        Message: "Contact Number Error",
        Title: "Only 500 invite codes can be created at once."
    }
};

var GetFinalData  =function(en, dt, msgDefination, parseFlag){ // Filter message and generate response data
    /*
        client : Using this object instance we can emit the message & data
        en : Which event we have to send as response.
        dt : Object or array of data which we need to send.
        msgDefination : Defination of message which type of message we have to emit. E.X : error:1001
        parseFlag : Any message need to parse with sended data or not. if true i will parse the message.
    */
    try {
        if (!msgDefination)
            msgDefination = 'success:0000';

        if (!dt)
            dt = {};

        if (!parseFlag)
            parseFlag = false;

        var msgArr = msgDefination.split(':');

        var data = {
            flag: (msgArr[0] == 'error') ? false : true,
            errorCode: msgArr[1],
            msg: (dataCodesArr[msgDefination] && dataCodesArr[msgDefination].Message) ? dataCodesArr[msgDefination].Message : 'Unknown Error!!',
            dialogTitle: (dataCodesArr[msgDefination] && dataCodesArr[msgDefination].Title) ? dataCodesArr[msgDefination].Title : 'Alert',
            en: en,
            data: dt
        };
        console.log("\nResponse : " + data.en + " : " + JSON.stringify(new Date()) + " : " + JSON.stringify(data));
        return data;
    } catch(e) {
        console.log("Exception  : 1 : GetFinalData",e)
    }
}
module.exports ={
    dataCodesArr:dataCodesArr,
    GetFinalData:GetFinalData
}