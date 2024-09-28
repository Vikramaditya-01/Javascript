 //////// conditional operator //////
/*  

<   : Less then
>   : Greater then 
<=  : Less then equal too
>=  : Greater then equal too
==  : dobul equal too 
!=  : not equal too
=== : Triple equal too   (For Compearing with type also )
&&  : AND operator
||  : OR operator

*/



//+++++++++++++++++++++++ Using simple if statement++++++++++++++++++++++

const isUserLOggedIn = true
const temprature = 41
if (temprature < 50) {
    console.log(`Temprature Is less then 50 and now atual temprature is : ${temprature}`);  
}
console.log(`Temprature Is more then 50 and now atual temprature is : ${temprature}`); 



//+++++++++++++++++++++++ if -else statement +++++++++++++++++++++++++

const temprature1 = 41
if(temprature1 < 50){
    console.log(`Temprature Is less then 50 and now atual temprature is : ${temprature1}`);  
}else
console.log(`Temprature Is more then 50 and now atual temprature is : ${temprature1}`); 

//+++++++++++++++++++++++ Using short hand style +++++++++++++++++++++++++

 const balance1 = 1000;
if (balance1 > 500) console.log(`You can acess now your balance is ${balance1}rs and that is more then 500rs.`);   /// short hand style ........

//+++++++++++++++++++++++ Using nested else if +++++++++++++++++++++++++

const balance = 1000
if(balance < 500) {
    console.log("less then 500");    
} else if(balance < 750) {
    console.log("less then 750");
} else if( balance < 1000){
    console.log("less then 1000");
} else if(balance < 1200){
    console.log("less then 1200");
} else {
    console.log("less then 1500");
}

//+++++++++++++++++++++++ Using AND(&&) operator+++++++++++++++++++++++++

const userLoggedIn = true 
const userPayment = true

if (userLoggedIn && userPayment){
    console.log("hello welcome !   start watching your course");    
} else {
    console.log(" Buy the course and then start watching ");   
}

//+++++++++++++++++++++++ Using or(||) operator+++++++++++++++++++++++++

const loggedInFromGoogle = true
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("logged in succesfully"); 
} else {
    console.log("Acess denied");
}



//++++++++++++++ Using OR(||) and And($$) operator together++++++++++++++++

// const loggedInFromGoogle = true
// const loggedInFromEmail = true

// if (loggedInFromEmail || loggedInFromGoogle){
//     console.log("logged in succesfully"); 
    
//      const userLoggedIn = true 
//      const userPayment = true

//          if (userLoggedIn && userPayment){
//              console.log("hello welcome!....start watching your course");    
//          } else {
//              console.log(" Buy the course and then start watching ");   
//              }

// } else {
//     console.log("Acess denied");
// }
