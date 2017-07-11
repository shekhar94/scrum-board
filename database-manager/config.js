var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
MongoClient.connect("mongodb://localhost:27017/scrum-board-db", { native_parser: true }, function(err, db) {
    assert.equal(null, err);
    console.log(db.collection('dailyStatus').find({}).toArray(function(err, item) {
        console.log(item);
    }));
});