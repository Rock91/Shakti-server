'use strict';

var SERVER = {
    APP_NAME: 'Admin',
    PORTS: {
        HAPI: 3000
    },
    TOKEN_EXPIRATION_IN_MINUTES: 600,
    JWT_SECRET_KEY: 'sUPerSeCuREKeY&^$^&$^%$^%7782348723t4872t34Ends',
    GOOGLE_API_KEY : '',
    THUMB_WIDTH : 50,
    THUMB_HEIGHT : 50,
    DOMAIN_NAME : 'http://34.203.193.180',
    BASE_URL:'http://192.168.0.136:3000',                         ///local 
    // BASE_URL:'http://devserver.gooutlondon.org:3000',          // dev
    // BASE_URL:'http://devserver.gooutlondon.org:3000',          // live
    BASE_URL_venue:'http://192.168.0.206/go-out-venue-panel',                                   //local
    //BASE_URL_venue:'http://devserver.gooutlondon.org/venue',                                    //dev


    IP : '34.203.193.180'
};

var DATABASE = {
    PROFILE_PIC_PREFIX : {
        ORIGINAL : 'mediaFile_',
        THUMB : 'profileThumb_'
    },
    PROFILE_PIC : {
        ORIGINAL : 'profilePic_',
        THUMB : 'profileThumb_'
    },
    USER_ROLES: {
        ADMIN: 'ADMIN',
        USER: 'USER',
        MANAGER: 'MANAGER'
    },
    FILE_TYPES: {
        LOGO: 'LOGO'
    },
    DEVICE_TYPES: {
        IOS: 'IOS',
        ANDROID: 'ANDROID'
    },
    ADMIN_TYPE: {
        SUPER_ADMIN: 0,
        SUB_ADMIN: 1,
        STAFF: 2
    },
    VENUE_TYPE: {
        RESTAURANT: 'RESTAURANT',
        PUBS_BARS: 'PUBS_BARS',
        NIGHT_CLUBS: 'NIGHT_CLUBS'
    },
    PROMOTION_TYPE: {
        STAD_PROMOTION: 'Standard Promotion',
        FOURPLUSPROMOTION: '4+ Promotion'
    },
    ANALYTICS:{
        VENUE_VISIT: 'VENUE_VISIT',
        VENUE_VIEWED: 'VENUE_VIEWED',
        PUBLIC_TRANSPORT_VIEWED: 'PUBLIC_TRANSPORT_VIEWED',
        CLICKED_BOOK_CAB: 'CLICKED_BOOK_CAB',
        SAW_BOOK_CAB: 'SAW_BOOK_CAB',
        SHARED_VENUE: 'SHARED_VENUE'
    },
    DAY: {
        "1": "MONDAY",
        "2":"TUESDAY",
        "3": "WEDNESDAY",
        "4": "THURSDAY",
        "5": "FRIDAY",
        "6": "SATURDAY",
        "0": "SUNDAY"
    }
};

var STATUS_MSG = {
    ERROR: {
        INVALID_USER_PASS: {
            statusCode:401,
            type: 'INVALID_USER_PASS',
            customMessage : 'Invalid username or password'
        },
        TOKEN_ALREADY_EXPIRED: {
            statusCode:401,
            customMessage : 'Token Already Expired',
            type : 'TOKEN_ALREADY_EXPIRED'
        },
        USER_ALREADY_OFFER_ACCEPTED: {
            statusCode:401,
            customMessage : 'User Already offer Accepted',
            type : 'USER_ALREADY_OFFER_ACCEPTED'
        },
        USER_ALREADY_OFFER_DELETED: {
            statusCode:401,
            customMessage : 'User Already offer Deleted',
            type : 'USER_ALREADY_OFFER_DELETED'
        },
        YOU_ALREADY_OFFER_ACP: {
            statusCode:401,
            customMessage : 'You are Already offer Accepted',
            type : 'YOU_ALREADY_OFFER_ACP'
        },
        YOU_ALREADY_OFFER_DELETED: {
            statusCode:401,
            customMessage : 'You Already offer Deleted',
            type : 'YOU_ALREADY_OFFER_DELETED'
        },
        DB_ERROR: {
            statusCode:400,
            customMessage : 'DB Error : ',
            type : 'DB_ERROR'
        },
        INVALID_ID: {
            statusCode:400,
            customMessage : 'Invalid Id Provided : ',
            type : 'INVALID_ID'
        },
        APP_ERROR: {
            statusCode:400,
            customMessage : 'Application Error',
            type : 'APP_ERROR'
        },
        ADDRESS_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Address not found',
            type : 'ADDRESS_NOT_FOUND'
        },
        NOT_FOUND: {
            statusCode:400,
            customMessage : 'User not found',
            type : 'NOT_FOUND'
        },
        IMP_ERROR: {
            statusCode:500,
            customMessage : 'Implementation Error',
            type : 'IMP_ERROR'
        },
        APP_VERSION_ERROR: {
            statusCode:400,
            customMessage : 'One of the latest version or updated version value must be present',
            type : 'APP_VERSION_ERROR'
        },
        INVALID_TOKEN: {
            statusCode:401,
            customMessage : 'Invalid token provided',
            type : 'INVALID_TOKEN'
        },
        INVALID_CODE: {
            statusCode:400,
            customMessage : 'Invalid Verification Code',
            type : 'INVALID_CODE'
        },
        DEFAULT: {
            statusCode:400,
            customMessage : 'Error',
            type : 'DEFAULT'
        },
        PHONE_NO_EXIST: {
            statusCode:400,
            customMessage : 'Mobile number already registered',
            type : 'PHONE_NO_EXIST'
        },
        LINK_EXPIRED: {
            statusCode:400,
            customMessage : 'This Link has expired',
            type : 'LINK_EXPIRED'
        },
        EMAIL_EXIST: {
            statusCode:400,
            customMessage : 'Email Already Exist',
            type : 'EMAIL_EXIST'
        },
        EMAIL_DOES_NOT_EXIST: {
            statusCode:400,
            customMessage : 'Please use Registred email Id',
            type : 'EMAIL_DOES _NOT_EXIST'
        },
        ADMIN_EXISTS: {
            statusCode:400,
            customMessage : 'Admin Already Exists',
            type : 'ADMIN_EXISTS'
        },
        DUPLICATE: {
            statusCode:400,
            customMessage : 'Duplicate Entry',
            type : 'DUPLICATE'
        },
        DUPLICATE_ADDRESS: {
            statusCode:400,
            customMessage : 'Address Already Exist',
            type : 'DUPLICATE_ADDRESS'
        },
        UNIQUE_CODE_LIMIT_REACHED: {
            statusCode:400,
            customMessage : 'Cannot Generate Unique Code, All combinations are used',
            type : 'UNIQUE_CODE_LIMIT_REACHED'
        },
        INVALID_REFERRAL_CODE: {
            statusCode:400,
            customMessage : 'Invalid Referral Code',
            type : 'INVALID_REFERRAL_CODE'
        },
        FACEBOOK_ID_PASSWORD_ERROR: {
            statusCode:400,
            customMessage : 'Only one field should be filled at a time, either facebookId or password',
            type : 'FACEBOOK_ID_PASSWORD_ERROR'
        },
        INVALID_EMAIL: {
            statusCode:400,
            customMessage : 'Invalid Email Address',
            type : 'INVALID_EMAIL'
        },
        PASSWORD_REQUIRED: {
            statusCode:400,
            customMessage : 'Password is required',
            type : 'PASSWORD_REQUIRED'
        },
        INVALID_COUNTRY_CODE: {
            statusCode:400,
            customMessage : 'Invalid Country Code, Should be in the format +52',
            type : 'INVALID_COUNTRY_CODE'
        },
        INVALID_PHONE_NO_FORMAT: {
            statusCode:400,
            customMessage : 'Phone no. cannot start with 0',
            type : 'INVALID_PHONE_NO_FORMAT'
        },
        COUNTRY_CODE_MISSING: {
            statusCode:400,
            customMessage : 'You forgot to enter the country code',
            type : 'COUNTRY_CODE_MISSING'
        },
        INVALID_PHONE_NO: {
            statusCode:400,
            customMessage : 'Phone No. & Country Code does not match to which the OTP was sent',
            type : 'INVALID_PHONE_NO'
        },
        PHONE_NO_MISSING: {
            statusCode:400,
            customMessage : 'You forgot to enter the phone no.',
            type : 'PHONE_NO_MISSING'
        },
        NOTHING_TO_UPDATE: {
            statusCode:400,
            customMessage : 'Nothing to update',
            type : 'NOTHING_TO_UPDATE'
        },
        USER_NOT_FOUND: {
            statusCode:400,
            customMessage : 'User Not Found',
            type : 'USER_NOT_FOUND'
        },
        ALREADY_FOLLOWING: {
            statusCode:400,
            customMessage : 'You are already following this user.',
            type : 'ALREADY_FOLLOWING'
        },
        INVALID_RESET_PASSWORD_TOKEN: {
            statusCode:400,
            customMessage : 'Invalid Reset Password Token',
            type : 'INVALID_RESET_PASSWORD_TOKEN'
        },
        INCORRECT_PASSWORD: {
            statusCode:401,
            customMessage : 'Incorrect Password',
            type : 'INCORRECT_PASSWORD'
        },
        EMPTY_VALUE: {
            statusCode:400,
            customMessage : 'Empty String Not Allowed',
            type : 'EMPTY_VALUE'
        },
        PHONE_NOT_MATCH: {
            statusCode:400,
            customMessage : "Phone No. Doesn't Match",
            type : 'PHONE_NOT_MATCH'
        },
        SAME_PASSWORD: {
            statusCode:400,
            customMessage : 'Old password and new password are same',
            type : 'SAME_PASSWORD'
        },
        ACTIVE_PREVIOUS_SESSIONS: {
            statusCode:400,
            customMessage : 'You already have previous active sessions, confirm for flush',
            type : 'ACTIVE_PREVIOUS_SESSIONS'
        },
        EMAIL_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Email address already registered with us. Please login to continue.',
            type : 'EMAIL_ALREADY_EXIST'
        },
        USER_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Email address already exists.',
            type : 'USER_ALREADY_EXIST'
        },
        ERROR_PROFILE_PIC_UPLOAD: {
            statusCode:400,
            customMessage : 'Profile pic is not a valid file',
            type : 'ERROR_PROFILE_PIC_UPLOAD'
        },
        PHONE_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Phone No. Already Exists',
            type : 'PHONE_ALREADY_EXIST'
        },
        EMAIL_NOT_FOUND: {
            statusCode:400,
            customMessage : 'This email address is not registered with us. Please register to continue.',
            type : 'EMAIL_NOT_FOUND'
        },
        EMAIL_NOT_VERIFIED: {
            statusCode:400,
            customMessage : 'Please verify your email first',
            type : 'EMAIL_NOT_VERIFIED'
        },
        PLZ_CHECK_MAIL: {
            statusCode:408,
            customMessage : 'Hi, we just sent a link to the email address you added, please take a look and click the link to continue. Thanks',
            type : 'PLZ_CHECK_MAIL'
        },
        USER_BLOCKED: {
            statusCode:400,
            customMessage : 'There is some problem with your account. Please contact our customer care',
            type : 'USER_BLOCKED'
        },
        FACEBOOK_ID_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Facebook Id Not Found',
            type : 'FACEBOOK_ID_NOT_FOUND'
        },
        PHONE_NOT_FOUND: {
            statusCode:400,
            customMessage : 'Phone No. Not Found',
            type : 'PHONE_NOT_FOUND'
        },
        INCORRECT_OLD_PASS: {
            statusCode:400,
            customMessage : 'Incorrect Old Password',
            type : 'INCORRECT_OLD_PASS'
        },
        UNAUTHORIZED: {
            statusCode:401,
            customMessage : 'You are not authorized to perform this action',
            type : 'UNAUTHORIZED'
        },
        ALREADY_TRAINER: {
            statusCode:400,
            customMessage : 'You have already registered as a trainer.',
            type : 'ALREADY_TRAINER'
        },
        OFFSET_REQUIRED: {
            statusCode: 400,
            customMessage: 'Offset is required with country',
            type: 'OFFSET_REQUIRED'
        },
        CANNOT_CREATE_WORKOUT: {
            statusCode: 401,
            customMessage: 'You can post a workout only after being registered as a trainer',
            type: 'CANNOT_CREATE_WORKOUT'
        },
        ALREADY_WORKOUT: {
            statusCode: 400,
            customMessage: 'You already have a workout scheduled during the specified time',
            type: 'ALREADY_WORKOUT'
        },
        WORKOUT_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Workout has been deleted.',
            type: 'WORKOUT_NOT_FOUND'
        },
        NO_WORKOUT_FOUND: {
            statusCode: 400,
            customMessage: 'No workout found.',
            type: 'NO_WORKOUT_FOUND'
        },
        CANNOT_CANCEL_NOW: {
            statusCode: 400,
            customMessage: 'You can only cancel workout 6 or more than 6 hours before the start time.',
            type: 'CANNOT_CANCEL_NOW'
        },
        CANNOT_EDIT_NOW: {
            statusCode: 400,
            customMessage: 'You can only edit a workout 6 or more than 6 hours before the start time.',
            type: 'CANNOT_EDIT_NOW'
        },
        CARD_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'No card found',
            type: 'CARD_NOT_FOUND'
        },
        ACCOUNT_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'No account found',
            type: 'ACCOUNT_NOT_FOUND'
        },
        CARD_ALREADY_DEFAULT: {
            statusCode: 400,
            customMessage: 'This card is already the default card',
            type: 'CARD_ALREADY_DEFAULT'
        },
        ACCOUNT_ALREADY_DEFAULT: {
            statusCode: 400,
            customMessage: 'This account is already the default account',
            type: 'ACCOUNT_ALREADY_DEFAULT'
        },
        DEFAULT_CARD_DELETE: {
            statusCode: 400,
            customMessage: 'A default card cannot be deleted',
            type: 'DEFAULT_CARD_DELETE'
        },
        DEFAULT_ACCOUNT_DELETE: {
            statusCode: 400,
            customMessage: 'A default account cannot be deleted',
            type: 'DEFAULT_ACCOUNT_DELETE'
        },
        ALREADY_PURCHASED_WORKOUT: {
            statusCode: 400,
            customMessage: 'Already purchased this workout',
            type: 'ALREADY_PURCHASED_WORKOUT'
        },
        BANK_ACCOUNT_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'No default bank account found',
            type: 'BANK_ACCOUNT_NOT_FOUND'
        },
        PAYMENT_FAILED: {
            statusCode: 400,
            customMessage: 'Payment failes',
            type: 'PAYMENT_FAILED'
        },
        CANNOT_LOGIN_SESSION: {
            statusCode: 400,
            customMessage: 'You cannot login on any other device while you are in session.',
            type: 'CANNOT_LOGIN_SESSION'
        },
        CANNOT_COMMENT: {
            statusCode: 400,
            customMessage: 'You cannot comment on this session',
            type: 'CANNOT_COMMENT'
        },
        PURCHASE_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'No workout purchase found.',
            type: 'PURCHASE_NOT_FOUND'
        },
        PROMO_NOT_FOUND: {
            statusCode: 400,
            customMessage: 'Promo Code not Found.',
            type: 'PROMO_NOT_FOUND'
        },
        PROMO_USE_ONCE: {
            statusCode: 400,
            customMessage: 'You have already used this promo code.',
            type: 'PROMO_USE_ONCE'
        },
        PROMO_ALREADY_EXIST: {
            statusCode: 400,
            customMessage: 'PromoCode already exists.',
            type: 'PROMO_ALREADY_EXIST'
        }

    },
    SUCCESS: {
        CREATED: {
            statusCode:201,
            customMessage : 'Created Successfully',
            type : 'CREATED'
        },
        DEFAULT: {
            statusCode:200,
            customMessage : 'Success',
            type : 'DEFAULT'
        },
        UPDATED: {
            statusCode:200,
            customMessage : 'Updated Successfully',
            type : 'UPDATED'
        },
        LOGOUT: {
            statusCode:200,
            customMessage : 'Logged Out Successfully',
            type : 'LOGOUT'
        },
        DELETED: {
            statusCode:200,
            customMessage : 'Deleted Successfully',
            type : 'DELETED'
        },
        ADDED_AS_TRAINER: {
            statusCode:200,
            customMessage : 'Your profile has been updated successfully. Please wait for the Admin to review your profile and approve you as a trainer.',
            type : 'ADDED_AS_TRAINER'
        }
    }
};


var swaggerDefaultResponseMessages = [
    {code: 200, message: 'OK'},
    {code: 400, message: 'Bad Request'},
    {code: 401, message: 'Unauthorized'},
    {code: 404, message: 'Data Not Found'},
    {code: 500, message: 'Internal Server Error'}
];


var notificationMessages = {
};

var pushNotificationMessages = {
    VENUE_VISITED: {
        message: 'Venue Visited Notification.',
        flag: 100
    },
    VENUE_CLOSING: {
        message: 'If you need a taxi our partner London Carriages have a driver free and can be with you in 10-min.  Kind Regards Go Out London ??',
        flag: 101
    },
    ADMIN_NOTIFICATION: {
        message: '{{text}}',
        flag: 102
    }
};


var APP_CONSTANTS = {
    SERVER: SERVER,
    DATABASE: DATABASE,
    STATUS_MSG: STATUS_MSG,
    notificationMessages: notificationMessages,
    pushNotificationMessages: pushNotificationMessages,
    swaggerDefaultResponseMessages: swaggerDefaultResponseMessages
};

module.exports = APP_CONSTANTS;