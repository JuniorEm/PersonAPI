var mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/admin";

var mongoConnection = function(callback) {
  mongodb.connect(url, function (err, callback) {
     if(err) throw err;
     console.log("Connecting to Database");
     callback();
  });
}

module.exports = function() {
    return mongoConnection;
}
