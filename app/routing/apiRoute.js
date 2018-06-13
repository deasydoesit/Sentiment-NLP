var twitterSearch = require("../../app/modules/twitter.js");
var keys = require("../data/keys/keys");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

// var watsonNlp = require("../../app/modules/watson.js")
console.log(twitterSearch);
module.exports = function(app) {

    app.get("/api", function(req, res) {
        twitterSearch();
        // watsonNlp();
    });

   app.post("/api", function(req, res) {
    twitterSearch();
   })
   app.post("/api/query", function(req, res) {
    
    var search = req.body;

    console.log(search);
    var tag = search.data;


    var client = new Twitter({
      consumer_key: 'kS1uEtsZfGIsBh4XKO88yT0cg',
      consumer_secret: '8ExXQ7wdGQ3qYu53a8hyHzbVExBMJkl8SvXbJXn1DXQ23mCVlS',
      access_token_key: '1004547933612724224-5DryC0uN3fV7IP1at6mNOWb8ywegWI',
      access_token_secret: 'KCsZR4HlCBg8sSQaMVmTRxBE8cNDb7yzyEnQhG4aXp4zM'
    });
     
    client.get('search/tweets', {q: tag}, function(error, tweets, response) {
        for (i=0; i <= 10; i++) {
        console.log(tweets.statuses[i].text);
        res.json(tweets.statuses[i].text);
        }
     });
    // res.json(search);
  });


};

