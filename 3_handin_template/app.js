const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db/db.js');


//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const accountRoute = require('./routes/accounts');

//const { db } = require('./models/account');
app.use('/accounts', accountRoute);

//Initial route
app.get('/', (req, res) => {
    res.send('Welcome to the banking app');
});

//Start listening
app.listen(8080, () => {
    db.getConnection().then(function(){
        console.log("you are connected to db")});
        console.log('Server listening on 8080');
});
