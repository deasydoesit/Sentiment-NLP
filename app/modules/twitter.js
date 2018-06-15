require("dotenv").config(); 
var axios = require("axios");
var keys = require("../data/keys/keys");

function getTweets(search) {
    return  axios({
        method: "get",
        baseURL: "https://api.twitter.com/1.1/search/tweets.json",
        headers: {
            "Authorization": "Bearer " + keys.twitter.bearer_token
        },
        params: {
            q: search,
            result_type: "popular", 
            tweet_mode: "extended",
            count: 9
        }
    });
};

module.exports = getTweets;
