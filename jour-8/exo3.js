var request = require("request");

function catchPokemon (id) {

    request.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118", function (err, res, body) {

        var pokemonGame = JSON.parse(body);

        console.log("id :", id);

        console.log("name :", pokemonGame.results[id].name);


    });


}

catchPokemon(444)