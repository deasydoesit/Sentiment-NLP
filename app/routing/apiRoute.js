var twitterSearch = require("../../app/modules/twitter.js");
var watsonNlp = require("../../app/modules/watson.js");
var cryptoSearch = require("../../app/modules/crypto.js");

module.exports = function(app) {

    app.get("/api", function(req, res) {
        twitterSearch();
        watsonNlp();
        cryptoSearch("ETH");
    });

};
