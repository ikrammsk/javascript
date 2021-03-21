
var moment = require('moment');


function calculateAge(birthDate) {

    // var birthDate = moment(new Date("1990/02/14"));
    // var todayDate = moment(new Date());
    

    // console.log(todayDate.diff(birthDate, "years"));      


    var myAge = moment(birthDate,"YYYYMMDD").fromNow("yy")
    console.log("You have",myAge);

}
calculateAge("1990-02-14");