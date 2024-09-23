const accountId = 144553 ;
let accountEmail = "abc@gmail.com";
var accountPassword = "123qwerty";
accountCity = "kolkata" ;


// accountId = 2; // it's not allowed because it's constant
accountEmail = "xyz@abc.com" ;
accountPassword = "asdfgh"
accountCity = "Gopiballavpur" 
let accountState;


console.log(accountId) ;
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);  // avoid this 

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity ,accountState])   // print these same things in one line and print it's table   




