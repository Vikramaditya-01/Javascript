// stack => primitive        ;     heap => non primitive


//           Example of stack memory

let name = "vikramaditya Gorai"
let newName = name ;
 newName = "Munmun Gorai" ;

console.log(newName);
console.log(name);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//               Example of heap memory
let user1 ={
    email : "user@gmail.com" ,
    upiidd : "user@ybl"

}

let user2 = user1 ;
user2.email = "user2@gmail.com"

console.log(user1.email);
console.log(user2.email);

