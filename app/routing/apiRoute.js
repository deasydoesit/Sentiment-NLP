var twitterSearch = require("../../app/modules/twitter.js");
console.log(twitterSearch);
// var watson = require("../modules/watson.js")
var Twitter = require('twitter');
// var client = new Twitter(keys.twitter);
var path = require("path");

// var watsonNlp = require("../../app/modules/watson.js")

module.exports = function(app) {

  //takes the variable that was in index.html and stores the data in req (request)
  app.post("/api/query", function(req, res) {

    //takes the data in req and turns it into a variable
    search = req.body.data

    console.log(search)

    //passes the above variable, search, into the function twitterSearch which is it to twitter.js because of line 1
      var tweetsData = twitterSearch(search);
      console.log("test" + tweetsData);
      res.json("hello")
      // watsonNlp();
  });

  }