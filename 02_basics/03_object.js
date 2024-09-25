// singleton
//Object.create



//object literals

const mysym = Symbol("key1")

const jsUser ={
    name : "Vikramaditya",
    "Full Name" : "Vikramaditya Gorai",
    [mysym] : "first key ",
    age : 19,
    Email : "xyz@gmail.com",
    IsLogged : false ,
    LastLoginDays : ["sunday" , "Wednesday" , "Friday" ],
}

console.log(jsUser.Email);  // can use it but not always work it

console.log(jsUser["Email"]);  // recomended and always work 
console.log(jsUser["Full Name"]); // here we need this [] , we can't be able to use . here
console.log(jsUser[mysym]);

jsUser.Email = "Vikramaditya@openai.com"
console.log(jsUser["Email"]);

Object.freeze(jsUser) // freez is used to lock the object that can't be change

jsUser.Email = "Vikramaditya@Google.com"   // this will not change the Email because this object is freez .
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Namaskar");
}

jsUser.greetingsTwo = function(){
    console.log(`namaskar ${this.name}`);
}

console.log(jsUser.greetingsTwo());