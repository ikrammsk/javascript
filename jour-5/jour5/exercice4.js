var mysteryNum = Math.floor(Math.random() * (1 - 100 + 1) + 100);
var number = 0
var prompt = require("prompt");

prompt.start();


function playPrompt() {

    prompt.get('Quel est le nombre mystère ?',

        function (mysteryNum, num) {
            if (mysteryNum) {
                return number(mysteryNum);
            }


            if (mysteryNum = 'NaN') {

                console.log("error! ")
            }

            else if (mysteryNum < number) {
                playPrompt
                console.log("C'est plus ! ")
            }
            else if (mysteryNum > number) {

                playPrompt
                console.log("C'est moins ! ")

            }
            else if (mysteryNum === number) {
                playPrompt
                console.log("Bravo ! ")

            }
        }



playPrompt();
