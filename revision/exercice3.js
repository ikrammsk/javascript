function checkPal(str) {


    var letters = str.split("");
    var reversedLetters = letters.reverse();
    var reservedstr = reversedLetters.join("");

    if (reservedstr === str) {
        console.log("Palindrome !");
    } else {
        console.log("Nooo !");
    }
}




checkPal("racecar");
checkPal("laptop");
