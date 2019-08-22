 var config = require('../config/config');
//var levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal']
var log = require('console-log-level')({ level: config.logLevel })
module.exports = log;