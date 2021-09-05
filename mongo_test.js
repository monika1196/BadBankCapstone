// Test this is running by putting 'node mongo_test.js' in the terminal and you should see the connected message
const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected!')

    // Database Name
    const dbName = 'myproject';
    const db     = client.db(dbName);

    // New User
    var name   = 'user' + Math.floor(Math.random()*10000);
    var email  = name + '@mit.edu';

    // Insert into customer table
    var collection = db.collection('customers');
    var doc        = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document insert');
    });

    // Print out contents of the database
    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('collection:',docs);

            // Clean up
            client.close();
    });
});
