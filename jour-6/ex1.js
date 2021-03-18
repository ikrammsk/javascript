
// var d = new Date();
// console.log(d);



function formatDate(d) {

    var d = new Date();
    

    // console.log(d)

    // console.log(d.getDate());
    // console.log(d.getMonth());
    // console.log(d.getFullYear());
    // console.log(typeof d.getDate());
    
    console.log(d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear());
}

formatDate("2020-3-18");