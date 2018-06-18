require("dotenv").config(); 

var axios = require("axios");

var keys = require("../data/keys/keys.js");
var getTweets = require("../../app/modules/twitter.js");
var getPrice = require("../../app/modules/crypto.js");
var coins = require("../data/coins.js")


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1(keys.watson);

module.exports = function (app) {

    app.post("/api", function (req, res) {

        //results obj, ultimately returned to client device w/ price and sentiment data
        var results = {};

        //function to identify coin name/ticker array, corresponding to user search, for api query purposes
        function isCoin(coin) {
            return coin.includes(req.body.search.toLowerCase());
        }

        //userSearch captures the identified coin name/ticker array, corresponding to user search, for api query purposes
        var userSearch = coins.find(isCoin);

        //concurrent requests to Twitter API to get tweets and CryptoCompar API to get price associated with user searched coin
        axios.all([getTweets(userSearch[0]), getPrice(userSearch[1].toUpperCase())])
            .then(axios.spread(function(tweets, price) {
                
                // price handling 
                var avgPriceArray = price.data.Data.reduce(function (accum, current) {
                    var avg = ((current.high + current.low) / 2);
                    accum.push(Number.parseFloat(avg).toFixed(2));
                    return accum
                }, []);
                results.price = avgPriceArray;

                //tweets handling
                var textToBeAnalyzed = [];
                for (var i = 0; i < tweets.data.statuses.length; i++) {
                    textToBeAnalyzed.push(tweets.data.statuses[i].full_text);
                }
                var text = textToBeAnalyzed.join();
                return text;

            }))
            .then(function (text) {

                //watson config parameters
                var parameters = {
                    'text': text,
                    'features': {
                        'sentiment': {}
                        },
                }

                //watson api call, returns results obj to client device
                natural_language_understanding.analyze(parameters, function (err, response) {
                    if (err)
                        console.log('error:', err);
                    else {
                        results.watson = response.sentiment.document;
                        return res.send(results);
                    }
                });
            });
    });

};