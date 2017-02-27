"use strict";
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const path = require('path');
const httpHelper = require('./helpers/httpHelper.js').httpHelper;
const dbHelper = require('./helpers/dbHelper.js').helper;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Setup for public folder
app.use(express.static(path.join(__dirname, 'public')));

//Listen on the correct port
const port = process.env.PORT || "8080";
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/api/latest/imagesearch", (req, res, next) => {
  //Return the searches completed.
  dbHelper.findAllRecords(res, req);
})

// https://dev.cognitive.microsoft.com/docs/services/56b43f0ccf5ff8098cef3808/operations/571fab09dbe2d933e891028f/console
app.get("/api/imagesearch/:search*", (req, res, next) => {
  let offset = req.query.offset || 1, search = req.params.search;
  dbHelper.createOrUpdateSearchRecord(search);
  httpHelper.bingSearch(search, offset).then((response) => {
      let images = httpHelper.filterImages(response.getBody().value);
      res.send(images);
  }).catch((err) => {
      console.log(err);
      res.send({error: "We couldn't complete your search. Please try again."});
  })
})
