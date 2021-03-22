var array = [1, "toto", 34, "javascript", 8]

var numbers = array.filter(function (item) {
    if (typeof (item) === 'number') {
        return item
    }

});

console.log(numbers);