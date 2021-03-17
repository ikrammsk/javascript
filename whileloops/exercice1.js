var start = 50;
var finish = 200;
var counter = start
var temp = 0;




while (counter <= finish) {
    counter++
    temp = start % 2
    // console.log(temp)
    if (temp === 0) {
        console.log("Nbr pair " + start);
        // start++;
    }
    // else {
    //     // console.log("Nombre impair"+ counter);
    // }
    start++
}

// console.log(start);