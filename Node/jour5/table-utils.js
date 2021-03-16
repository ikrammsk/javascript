function multiply(num) {
    for (i = 0; i <= 10; i++) {

        console.log(num + " fois " + i + "=" + num * i)

    }

}
function addition(num) {
    for (i = 0; i <= 10; i++) {

        console.log(num + " plus " + i + "=" + num + i)

    }

}



multiply(parseInt(process.argv[2]))


var exemple = require("./table-utils.js");

console.log(exemple.table());
