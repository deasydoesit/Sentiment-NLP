require("dotenv").config();

var keys = require("../data/keys/keys");
var NaturalLanguageUnderstanding = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstanding(keys.watson);

var watsonNlp = function(text) {
    
    var parameters = {
        'text': text,
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
      
      natural_language_understanding.analyze(parameters, function(err, response) {
        if (err)
          console.log('error:', err);
        else
          console.log(JSON.stringify(response, null, 2));
      });
      
}

module.exports = watsonNlp;