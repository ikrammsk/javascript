
var fs = require("fs");
console.log("C'est parti pour la recherche :");


fs.readFile("./jour07.txt", function (err, data) {
   if (err) {
      console.error(err);
      return;
   }

   console.log("Lecture en différé : " + data.toString());
});
