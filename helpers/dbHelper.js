"use strict";
const mongo = require('mongodb').MongoClient;
const DBURL = process.env.DBURL;
var db_helper = {
  createSearchRecord: function(urls, search, dateString) {
    //Create a new doc
    let doc = {term: search, first_search: dateString, frequency: 1}
    urls.insert(doc, (err, doc) => {
      if (err) console.log(err);
      if (doc) console.log(doc);
    });
  },
  createOrUpdateSearchRecord: function(search) {
    mongo.connect(DBURL, (err, db) => {
      if (db) {
        let urls = db.collection('searches');
        urls.find({term: search}, {}).toArray((err, docs) => {
          var date = new Date();
          var dateString = date.toISOString();
          if (docs && docs.length > 0) {
            //Increase frequency
            urls.update({term: search}, { $inc: { frequency: 1}, $set: {most_recent: dateString} });
          } else if (!err) {
            db_helper.createSearchRecord(urls, search, dateString);
          } else {
            //Console out whatever error happened.
            console.log(err);
          }
        })
      }
      if (err) console.log(err);
    })
  },
  findAllRecords: function(res, req){
    mongo.connect(DBURL, (err, db) => {
      if (err) res.json({error: "There has been an error please try again."});
      if (db) {
        let searches = db.collection('searches');
        searches.find({}, {_id: 0}).sort({first_search: -1}).toArray((err, records) => {
          if (records && records.length > 0) res.json(records);
          if (records && records.length === 0) res.json({error: "There aren't any searches yet. Why don't you search for something?"})
          if (err) res.json({error: "There has been an error please try again."});
        })
      }
    })
  }
}
exports.helper = db_helper;
