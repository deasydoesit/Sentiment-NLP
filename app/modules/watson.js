require("dotenv").config();
var axios = require("axios");
var keys = require("../data/keys/keys");


function watsonNlpOfTweets() {
    return  axios({
        method: "get",
        baseURL: "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-16",
      auth: {
        username: "5ea78883-7049-4f65-90a6-1f1c6c721950",
        password: "iI0G8NYzUD8B"
      },
      params: {
          "text": "IBM is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries.",
          "features": {
            "entities": {
              "emotion": true,
              "sentiment": true,
              "limit": 2
            },
            "keywords": {
              "emotion": true,
              "sentiment": true,
              "limit": 2
            }
          }
      }         
    });
};

module.exports = watsonNlpOfTweets;

