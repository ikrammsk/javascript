var longName = [
  {
    firstName: "Jane",
    lastName: "Doe"
  },
  {
    firstName: "John",
    lastName: "Smith"

  }
]

var shortName = longName.map(function (personne) {
  return (personne);

});


console.log(shortName);