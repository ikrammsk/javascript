
var prompt = require("prompt");

var mysteryNum = Math.floor(Math.random() * 100 + 1);



prompt.start();


function playPrompt() {

    prompt.get(
    {
        name: "r",
        description: "Quel est le nombre mystère ?",
        validator:  /^[0-9]+$/
   },


    function (err, res) {

        if (err) {
            console.log("Aucune réponse détécté ! Rejouez ");
            playPrompt();
        }

        if (res.r < mysteryNum) {
            console.log("C'est plus ! ");
            playPrompt();
        }
        else if (res.r > mysteryNum) {
            console.log("C'est moins ! ");
            playPrompt();

        }
        else {
            console.log("Bravo ! ");
        }
    }

 )}

    playPrompt();
