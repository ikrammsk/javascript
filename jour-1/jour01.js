// - 01 Hello World
console.log("Hello World !");

// - 02 String
var test;
test = "My name is Ikram";
console.log(test);

// - 03 Concatenation
var name;
name = "Msadak";
console.log("Nice to meet you "+ name );

// - 04 String Length
var testLength;
testLength = "I'm very long !";
console.log(testLength);

// - 05 Replace
var food = "Croissant is meh";
food=food.replace("meh","so good");
console.log(food);

// - 06 Up and Down
var basic = "This is cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicDown);
console.log(basicUp);

// - 07 Split
var word = "banana";
var letters = word.split("");
console.log(letters);

// - 08 Template
var age = "31";
var template = (`I'm ${age} years old`);
console.log(template);