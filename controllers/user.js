const {logger} = require('../helpers/index');

var AWS = require('aws-sdk');
var uuid = require('uuid');
// Set the region
AWS.config.update({region: 'us-east-1'});
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10'
});

exports.register = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in register user api`);
        //TODO Start create user inside dynamoDB
        let _item = req.body;
        _item.userId = uuid();
        logger.info(_item,_item)
        var params = {
          TableName: 'users',
          Item: {
               'userId' : {S: _item.userId},
               'firstName' : {S: _item.firstName},
               'lastName':{S: _item.lastName},
               'age':{N: parseInt(_item.age)+""},
               'country':{S: _item.country},
               'hasChildren':{BOOL: _item.hasChildren},
          }
        };
        // tt nn
        // Call DynamoDB to add the item to the table
        ddb.putItem(params, function(err, data) {
          if (err) {
            console.log('Error inide put dynamoDB', err);
            return res.InternalServerError();
          } else {
            console.log('Success', params.Item);
             return res.Ok(data);
          }
        });
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in register api is:, ${err}`)
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
        var params = {
            TableName: 'users',
            Key: {
              'userId': {S: req.params.userId}
            }
          };
          // Call DynamoDB to read the item from the table
          ddb.getItem(params, function(err, data) {
            if (err) {
              console.log('Error in get user From DynamDb', err);
               return res.InternalServerError();
            } else {
                if(data && data.Item){
                    console.log('Success', data.Item);
                    return res.Ok(data.Item);
                }
                return res.NotFound(); 
            }
          });
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}