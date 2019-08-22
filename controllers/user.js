const {logger} = require('../helpers/index');

exports.register = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in register user api`);
        //TODO Start create user inside dynamoDB
        return res.Ok();
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in register api is:`, err)
        return res.InternalServerError();
    }
}

exports.login = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in register user api`);
        //TODO Start create user inside dynamoDB
        return res.Ok();
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in register api is:`, err)
        return res.InternalServerError();
    }
}

exports.changePassword = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in changePassword user api`);
        //TODO Start update user password 
        return res.Ok();
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in changePassword api is:`, err)
        return res.InternalServerError();
    }
}

exports.get = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in get user api`);
        //TODO Start get user by id from dynamoDB
        return res.Ok();
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}