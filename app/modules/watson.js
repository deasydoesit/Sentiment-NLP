require("dotenv").config();

var keys = require("../data/keys/keys");
var NaturalLanguageUnderstanding = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstanding(keys.watson);

var watsonNlp = function() {
    
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
      
      natural_language_understanding.analyze(parameters, function(err, response) {
        if (err)
          console.log('error:', err);
        else
          console.log(JSON.stringify(response, null, 2));
      });
      
}

module.exports = watsonNlp;