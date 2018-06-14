require("dotenv").config();

// var keys = require("../data/keys/keys");
var Twitter = require('twitter');
// var client = new Twitter(keys.twitter);

//the variable search is taken from apiRoute.js and passed into function twitter.
function twitter(search) {

//a new variable, tag, is created using the value of search
var tag = search;

var client = new Twitter({
  consumer_key: "kS1uEtsZfGIsBh4XKO88yT0cg",
  consumer_secret: "8ExXQ7wdGQ3qYu53a8hyHzbVExBMJkl8SvXbJXn1DXQ23mCVlS",
  access_token_key: "1004547933612724224-5DryC0uN3fV7IP1at6mNOWb8ywegWI",
  access_token_secret: "KCsZR4HlCBg8sSQaMVmTRxBE8cNDb7yzyEnQhG4aXp4zM"
});

//the data from the variable, tag, is combined with the twitter api and tweets gets console.logged
client.get('search/tweets', {q: tag}, function(error, tweets, response) {
  for (i=0; i < 10; i++) {
  console.log(tweets.statuses[i].text);
}});

};


module.exports = twitter;
