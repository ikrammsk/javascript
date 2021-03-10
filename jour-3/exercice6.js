var sentence = "Hello Konexio !"
var test = []

for (var i=0; i<=sentence.length; i++){
    test.unshift(sentence[i])
}
console.log(test.join(""));
