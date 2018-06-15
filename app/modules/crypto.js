var axios = require("axios");


var getPrice = function(search) {

    return axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${search}&tsym=USD&limit=7`);

};

module.exports = getPrice;