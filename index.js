// Requirements for the node app
var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');

// Used to serve the static files from the public directory
app.use(express.static('public'));
app.use(cors());

// Adding the route definition for creating new users (now with the database)
app.get('/account/create/:name/:email/:password', function(req, res){
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// Adding the route definition for login
app.get('/account/login/:email/:password', function(req, res){
    res.send({
        email:    req.params.email,
        password: req.params.password
    });
});

// Adding the route definition for returning all account data (now with the database)
app.get('/account/all', function(req, res){
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// Listening for the port
var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);