var limit = 50;
var score = 64;

if (score >= limit)
{
    console.log("Ok Good !");
} 
else
 {  
    console.log("Oh, no !!!");
  
}  



var password = "azerty" ;
if (password.length > 5) {

    console.log("The password is secure");
} 
else 
{  
    console.log("Oh, no !!!");
} 



if (score >= limit && password.length>5) {
   
    console.log("Everything is good");
}
else 
{  
    console.log("Oh, no !!!");
} 



if (score>=limit || password.length>5) {
	
    console.log("Something is good!");
} 
else
{
	console.log("Nothing is good");
}



if (score===limit || password.length===5){
	
    console.log("Something is good");
}
else
{
	console.log("Nothing is good");
}


