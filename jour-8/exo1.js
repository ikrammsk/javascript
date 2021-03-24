var request = require('request');
console.log("#1");

var countriesNames = []

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    console.log("#2");
    var result = JSON.parse(body);
    
    var allCountries = result.map(function (name) {
        return name
    });

    console.log(allCountries)





});






console.log("#3");
