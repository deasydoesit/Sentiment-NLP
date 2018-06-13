var request = require("request");

var cryptoSearch = function(search) {

    var queryUrl = `https://min-api.cryptocompare.com/data/histoday?fsym=${search}&tsym=USD&limit=7`;
    var avgPriceArray;

    request(queryUrl, function(error, response, body) {

        var priceArray = JSON.parse(body).Data; 

        avgPriceArray = priceArray.reduce(function(accum, current) {
            var avg = ((current.high + current.low ) / 2);
            accum.push(Number.parseFloat(avg).toFixed(2));
            return accum
        }, []);

        console.log(avgPriceArray);

    });

};

module.exports = cryptoSearch;