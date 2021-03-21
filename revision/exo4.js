

function swap(str) {

    var myNewStr = "";

    for (var i = 0; i <= str.length - 1; i++) {


        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            myNewStr = myNewStr + str.charAt(i).toLowerCase()

        } else {
            myNewStr = myNewStr + str.charAt(i).toUpperCase()

        }

    }
    console.log(myNewStr)
}

swap('Hello World !')
