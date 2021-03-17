

function calculate(num1,num2,operator) {

    if (operator == '*') {
        
        console.log(num1*num2)

    } else if(operator == '+') {
        
        console.log(num1+num2)

    }else if(operator == '-') {
        
        console.log(num1-num2)

    }else if(operator == '/') {
        
        console.log(num1/num2)

    }else if(operator == '%') {
        
        console.log(num1%num2)

    }
}    
var a = parseInt(process.argv[2])
var b = parseInt(process.argv[3])
var c = process.argv[4]




calculate(a,b,c)


