var moment = require('moment');
var uuidv4 = require('uuid/v4');


exports.init = function (req, res, next) {
    req.requestId = uuidv4();
    req.requestTime = moment().toISOString();
    next();
};

exports.logger = function logger(req, res, next) {
    //INFO	GET /ping2 - 233f67a2-574f-44f7-bf9b-2ead3fa7037f - 2019-08-21T17:27:28.116Z
    console.log(req.method, req.url, '-',req.requestId,'-', req.requestTime);
    next();
};




exports.response = function (req, res, next) {
    //res.setHeader('content-type', 'application/json');
    res.Ok = function (obj) {


        response = obj;
        //closeConnection();
        return res.status(200).json(response);

    };

    res.BadRequest = function (obj) {
        response = obj;
        return res.status(400).json(response);
    };

    res.InternalServerError = function () {
        response = {
            requestId: req.requestId,
            requestTime: req.requestTime,
            replyCode: "500",
            replyMessage: "The server encountered an unexpected condition which prevented it from fulfilling the request.",
        };
       //closeConnection();
        return res.status(response.replyCode).json(response);
    };

    res.Forbidden = function (obj) {
        response = {
            requestId: req.requestId,
            requestTime: req.requestTime,
            replyCode: "403",
            replyMessage: 'No token provided.',
        };
        //closeConnection();
        return res.status(response.replyCode).json(obj);
    };

    res.NotFound = function () {
        response = {
            replyCode: "404",
            replyMessage: 'No Data Found.',
        };
        //closeConnection();
        return res.status(response.replyCode).json();
    };

    res.AccessDenied = function () {
        response = {
            replyCode: "401.1",
        };
        //closeConnection();
        return res.status(response.replyCode).json();
    };

    next();
};


exports.responseHeader = function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-user-auth');

    res.setHeader('Cache-Control', 'no-cache');
    
    // Pass to next layer of middleware
    next();
};


