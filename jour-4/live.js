// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78


function addUp(num){
    var sum = 0;
    for (var i = 1; i <= num ; i++) {
        
        sum = i + sum;

    }
    return sum;

}


console.log(addUp(12));



// 1,2,3,4,5,6,7,8,9,10,11,12

// 1+2=3
// 3+3=6
// 6+4=10
// 7+5=12
// 12+6=18
// 18+7=25
// 25+8=33
// 33+9=42
// 42+10=52
// 52+11=63
// 63+12=75