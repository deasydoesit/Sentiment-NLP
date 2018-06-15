var axios = require("axios");

var getPrice = function() {

    return axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=7`);

};

module.exports = getPrice;