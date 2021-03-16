function multiply(num) {
    for (i = 0; i <= 10; i++) {

        console.log(num + " fois " + i + "=" + num * i)

    }

}

multiply(parseInt(process.argv[2]))

module.exports = table

var {exemple} = require("./table-utils.js");

console.log(exemple.table());