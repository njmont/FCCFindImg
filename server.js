"use strict";
var app = require('express').express();
const mongo = require('mongod').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Setup for public folder
app.use(express.static(path.join(__dirname, 'public')));
