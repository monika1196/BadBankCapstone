// Data Abstraction Layer Package
// If I decide to change the data store away from mongo then I just have to update this file
// We have to use promises since we never know how the server will respond

// Package Requirements
const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;

// Connect to Mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    // Connect to myproject database  
    db = client.db('myproject');  
});

// Function for creating a user in the mongo database
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc        = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

// Function for outputting all user data
function all() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err,docs) {
                err ? reject(err) : resolve(docs);
        });
    })
}

// Exporting the functions to use in the Express App
module.exports = {create, all};