/* - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
- Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
- Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
- Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
 */

function calculate(num1,num2,operator) {

    if (operator == 'x') {
        
        console.log(num1*num2)

    } else if(operator == '+') {
        
        console.log(num1+num2)

    }else if(operator == '-') {
        
        console.log(num1-num2)

    }else if(operator == '/') {
        
        console.log(num1/num2)

    }else if(operator == '%') {
        
        console.log(num1%num2)

    }
}    

calculate(process.argv[2,3,4])
var args = process.argv.slice(2);
console.log(process.argv)