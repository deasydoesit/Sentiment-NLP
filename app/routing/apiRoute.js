require("dotenv").config();

var keys = require("../data/keys/keys");
var axios = require("axios");

var keys = require("../data/keys/keys.js")
var getTweets = require("../../app/modules/twitter.js");
var getPrice = require("../../app/modules/crypto.js");


var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1(keys.watson);

module.exports = function (app) {

    app.post("/api", function (req, res) {

        var results = {};

        axios.all([getTweets(req.body.search), getPrice(req.body.search)])
            .then(axios.spread(function (tweets, price) {

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
                var parameters = {
                    'text': 'IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.',
                    'features': {
                        'entities': {
                            'emotion': true,
                            'sentiment': true,
                            'limit': 2
                        },
                        'keywords': {
                            'emotion': true,
                            'sentiment': true,
                            'limit': 2
                        }
                    }
                }

                natural_language_understanding.analyze(parameters, function (err, response) {
                    if (err)
                        console.log('error:', err);
                    else {
                        results.watson = response
                        return res.send(results);
                    }
                });
            });
    });

};