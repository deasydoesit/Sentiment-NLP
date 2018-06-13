require("dotenv").config(); 

var keys = require("../data/keys/keys");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var twitterSearch = function() {

    //The client.get call below is what we'll use to query twitter based on our user search.
    //Specifically, in place of the {q: 'node.js'} argument, we'll pass our user search (e.g., {q: 'OmiseGO'}).
    //From there, we'll need to massage the tweets we get back to trim away bad results.
    client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
        console.log(tweets);
     });
     
};

module.exports = twitterSearch;