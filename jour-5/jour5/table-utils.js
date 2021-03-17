function multiply(num) {
    for (i = 0; i <= 10; i++) {

        var result = parseInt(num) * i

        console.log(num, "x", i, "=", result)

    }

}


function addition(num) {
    for (i = 0; i <= 10; i++) {

        var result = parseInt(num) + i

        console.log(num, "+", i, "=", result)

    }


}

module.exports = {
    multiply,
    addition,
};


