
var prompt = require("prompt");

var properties = [
    {
        name: "email",
        validator: /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i,
    },

    {
        name: "username",
        validator: /^[a-zA-Z\s\-]+$/,
        warning: "Le username ne doit contenir que des lettres, des chiffres et tirets"
    },

    {
        name: "password",
        validator: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$ /,
        warning: "- le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre"
    }
]
// console.log(user)



prompt.start(); // démarre le prompt
function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return 1;
}

prompt.get(properties, function (err, res) {
    if (err) {
        return onErr(err);
    }
    console.log("Données reçues :");
    console.log("=> Email : " + res.email);
    console.log("=> Username: " + res.username);
    console.log("=> Password : " + res.password);
  });


    function checkProfil() {
     

        if (properties == true) {
            console.log("All good! ")
        }
        else {
            console.log("Error")
        }
    }





    checkProfil(properties)
