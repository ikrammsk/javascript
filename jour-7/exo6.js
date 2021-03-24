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

// var allCake = cakes.filter(function (cake2) {
// 	cake2.status = "sold out"
// 	return (cake2.flavor === "chocolate")


// });

// console.log(allCake)



var chocolateCakes = cakes.filter(

    function (element) {

        // console.log("element", element);

        var isCakeChocolate = element.flavor === "chocolate";

        return isCakeChocolate; //true or false
    }

).map(

    function (element) {

        // console.log("element dans map", element);

        // console.log("element status", element.status)

        element.status = "sold out!";

        // console.log("element après modif de status", element);

        return element;
    }

)

console.log("Just chocolate and sold out", chocolateCakes)


