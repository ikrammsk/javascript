var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

// var allCake = cake.filter(function (cake2) {
// 	cake2.status = "sold out"
// 	return (cake2.flavor === "chocolate")


// });

// console.log(allCake)


var myCakesFavorite = cakes.map(function (cake) {

	cake.flavor === "chocolate"

	return cake;



});

// console.log(myCakesFavorite)

var myCakesFavoriteList = cakes.filter(function (cake) {
	cake.status = "sold out"
	return (cake.flavor === "chocolate")


});


console.log(myCakesFavoriteList)
