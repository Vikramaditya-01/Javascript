const userEmail =    "vikramaditya@google.com"

if (userEmail) {
    console.log("User found ");
    
} else {
    console.log("user not found in database");
    
}


/* Falsy Value

false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

*/

/*   Truthy Value  
 
"0" , 'false' , " " , [] , {} , function (){}

*/

if(userEmail.length == 0){
    console.log("array is empty");
}


// Nullish Coalescing operator (??)  : null , undefined


let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
//val1 = undefined ?? 15
val1 = undefined ?? 15 ?? 60

console.log(val1);

//Terniary Operator

// Condition ? truth statement : false statement 

const teaPrice = 100
teaPrice <50 ? console.log(`less then 50rs and total price is ${teaPrice}`) : console.log(`More then 50rs and total price is ${teaPrice}`)

