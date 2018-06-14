require("dotenv").config(); 

var twitterSearch = require("../../app/modules/twitter.js");
var watsonNlp = require("../../app/modules/watson.js");
var cryptoSearch = require("../../app/modules/crypto.js");

module.exports = function(app) {

    //Not important, jst for testing
    // app.get("/api", function(req, res) {
    //     twitterSearch();
    //     watsonNlp();
    //     cryptoSearch("ETH");
    // });
   
    app.post("/api", function(req, res) {
        var userSearch = req.body.search;
        twitterSearch(userSearch);
        res.json(req.body);
    });

};
 