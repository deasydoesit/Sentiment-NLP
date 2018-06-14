require("dotenv").config(); 

var watsonNlp = require("./watson.js");

var keys = require("../data/keys/keys");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var twitterSearch = function(search) {
    var textToBeAnalyzed = [];
    client.get('search/tweets', {q: search, result_type: "popular", tweet_mode: "extended"})
          .then(function(tweets) {
                for (var i = 0; i < tweets.statuses.length; i++) {
                    textToBeAnalyzed.push(tweets.statuses[i].full_text);
                }
                var text = textToBeAnalyzed.join();
                watsonNlp(text);
          })
          .catch(function(error){
              throw error;
          });
};

module.exports = twitterSearch;
