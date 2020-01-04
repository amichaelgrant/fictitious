const debug = require('debug')('server:mongo');
const deasync = require('deasync');
const mongoClient = require('mongodb').MongoClient;
const mongoOptions = {};
const mongoUrl = "mongodb://localhost:27017/fictitious";

/**
* We do not want to do this asynchronously
* We are perfectly happy to wait for a connection
* to the DB first before we start application and processing requests
*/
module.exports = function () {
  let done = false;
  mongoClient.connect(mongoUrl, mongoOptions, (err, client) => {
    done = true;
    if(err){
      debug("MongoDB connection error: ", err);
      throw err;
    };
    global.db = client.db();
    debug("Connected to mongoDB");
  });
  deasync.loopWhile(() =>!done);
};
