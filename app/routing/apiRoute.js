var twitterSearch = require("../../app/modules/twitter.js");
var watsonNlp = require("../../app/modules/watson.js")

module.exports = function(app) {

    app.get("/api", function(req, res) {
        twitterSearch();
        watsonNlp();
    });

};
