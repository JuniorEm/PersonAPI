var mongoDb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/admin";

function PersonDAO() {
}

PersonDAO.prototype.findById = (id, callback) => {

    mongoDb.connect(url, (err, db) => {
      if(err) throw err;
       db.collection('person', (err, collection) => {
         findOne(collection, id, callback, false);
         db.close();
      });
     });
};

var findOne = (collection, id, callback, hasToClose) => {
  collection.findOne( { "_id" : parseInt(id) }, (err, item) => {
           if (err) throw err;
           callback(item);
  });
};

PersonDAO.prototype.findAll = (callback) => {

  mongoDb.connect(url, (err, db) => {
    if (err) throw err;
    db.collection('person', (err, collection) => {
        collection.find().toArray( (err, items) => {
            if (err) throw err;
            callback(items);
            db.close();
        });
    });
  });
};

PersonDAO.prototype.insert = (body, callback) => {
  mongoDb.connect(url, (err, db) => {
    if (err) throw err;
    db.collection('person', (err, collection) => {
      if (err) throw err;
      collection.insertOne(body, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    });
    db.close();
  });
};

PersonDAO.prototype.delete = (id, callback) => {
  mongoDb.connect(url, (err, db) => {
      if (err) throw err;
      db.collection('person', (err, collection) => {
        findOne(collection, id, (result) => {
          console.log("Voltei");
          collection.deleteOne( result, (err, res) => {
            if (err) throw err;
            callback(res);
            db.close();
          });
        }, false);

      });

  });
};

module.exports = function() {
  return PersonDAO;
}
