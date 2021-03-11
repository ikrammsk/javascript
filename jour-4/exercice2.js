var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
}
var cat2 = {
    name: "Paulo",
    age: 5,
    isCute: false,
}

// var cats = [Object.assign(cat,cat2 )]
var cats = [cat, cat2]

console.log(cats);
console.log(cat.age);
console.log(cat2["isCute"]);