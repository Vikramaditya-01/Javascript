const user = {
    username : "Vikramaditya",
    price : 9999,
    welcomeMessage : function(){
         console.log(`${this.username} welcome to Website`);
         //console.log(this);
         
    }
}

// console.log(user.welcomeMessage());
// user.username = "rajhsree"
// console.log(user.welcomeMessage());
//console.log(this);


function chai(){
    let username = "Vikramaditya"
    console.log(this.username); 
}
//chai()

const cahi =  () => {                           // this is an arrow function 
    let username = "Vikramaditya"
    console.log(this.username); 
}
// chai()


// let addTwo = (num1 , num2) => {       // this is an basic arrow function
//     return num1 + num2               //   () => { }
// }                                          

//let addTwo = (num1 , num2) =>  num1 + num2    // Implecite return arrow function . it's also same but here we assume that it will automaticely return, that's why we don't write return function here . for this we need to write these in one line and don't use curly braces.

let addTwo = (num1 , num2) =>  (num1 + num2)      //    it's also written in same way,but for simplecity and make it more clear (less confusing) we write the operation under two paranthisis(.....) and here also we don't need to write return function because here we also assume it.
//++++++IMPORTENT*****===>>> if we write operation under paranthesis(......) then we don't need to write    return     function, but if we write all the operation under curly braces {......} then we  need to  write    return    function .
console.log(addTwo(2,5));
