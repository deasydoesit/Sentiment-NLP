require("dotenv").config();

var express = require("express");

var keys = require("../data/keys/keys");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
// var path = require("path");


var app = express();
// var PORT = process.env.PORT || 8080;

var hello = "hello"

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

app.get("/api/query", function(req, res) {
    return res.json(hello);
  });

  // app.post("/query", function(req, res) {
    
  //   var search = req.body;

  //   console.log(search);
  
  //   hello.push(search);
  
  //   res.json(search);
  // });

// var twitterSearch = function() {

//     //The client.get call below is what we'll use to query twitter based on our user search.
//     //Specifically, in place of the {q: 'node.js'} argument, we'll pass our user search (e.g., {q: 'OmiseGO'}).
//     //From there, we'll need to message the tweets we get back to trim away bad results.
//     client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//         console.log(tweets);
//      });
     
// };
function twitter(search) {
  console.log(search);
var tag = search;


var client = new Twitter({
  consumer_key: 'kS1uEtsZfGIsBh4XKO88yT0cg',
  consumer_secret: '8ExXQ7wdGQ3qYu53a8hyHzbVExBMJkl8SvXbJXn1DXQ23mCVlS',
  access_token_key: '1004547933612724224-5DryC0uN3fV7IP1at6mNOWb8ywegWI',
  access_token_secret: 'KCsZR4HlCBg8sSQaMVmTRxBE8cNDb7yzyEnQhG4aXp4zM'
});
 
client.get('search/tweets', {q: tag}, function(error, tweets, response) {
    for (i=0; i <= 10; i++) {
    // console.log(tweets.statuses[i].text);
    }
 });

};

module.exports = twitter()

//  app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });