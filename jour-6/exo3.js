
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
        validator: /(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{6,}/,
        warning: "- le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre",
        hidden: true,
        replace: "*"
    }

    

]
// console.log(user)



prompt.start(); // démarre le prompt


prompt.get(

    properties, 
    
    function checkProfil(err, res){

    if (err) {
        console.log("Error");

    }
    console.log("All good !")

}
)







