var mysteryNum = Math.floor(Math.random() * (1 - 100 + 1) + 100);
var number = 0
var prompt = require("prompt");

prompt.start();

function play() {
    prompt.get ( { description: "'Quel est le nombre mystère ?'" }, function (mysteryNum, number) {
        if (mysteryNum = NaN) {
            console.log("error!");
        }
        else if (mysteryNum < number) {
            play
            console.log("C'est plus ! ")
        }
        else if (mysteryNum > number) {
            play
            console.log("C'est moins ! ")

        }
        else if (mysteryNum === number) {
            play
            console.log("Bravo ! ")

        }

    });
}

play()