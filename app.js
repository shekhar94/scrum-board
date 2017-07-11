const express = require('express');
const app = express();

app.get('/data', function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    // Connection URL
    MongoClient.connect("mongodb://localhost:27017/scrum-board-db", { native_parser: true }, function(err, db) {
        // assert.equal(null, err);
        console.log(db.collection('dailyStatus').find({}).toArray(function(err, item) {
            res.send(item);
            // console.log(item);
        }));
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});