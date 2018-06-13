var twitterSearch = require("../../app/modules/twitter");

module.exports = function(app) {

    app.get("/api", function(req, res) {
        twitterSearch();
    });

};
