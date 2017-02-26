"use strict";

const express = require('express');
var app = express();
const mongo = require('mongod').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const requestify = require('requestify');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Setup for public folder
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || "8080";
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

app.get("/", (req, res, next) => {
  requestify.request('https://api.cognitive.microsoft.com/bing/v5.0/images/search', {
      method: 'POST',
      headers: {
          'Content-Type': 'multipart/form-data',
          'Ocp-Apim-Subscription-Key':"f7a7970e35124d4d81a3fed709b578c8 "
      },
      dataType: 'form-url-encoded',
      params: {
        q: "lolcat"
      }
  }).then((response) => {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      console.log(response.getBody().queryExpansions);
      res.send(response.getBody().queryExpansions);
  }).catch((err) => {
    console.log(err);
    res.send({});
  })

})
