function saymyname() {
    console.log("V");
    console.log("i");
    console.log("k");
    console.log("r");
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");
}

saymyname()

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2)
// }

// function addTwoNumbers(number1 , number2){
//     return number1+number2 
// }

// let result = addTwoNumbers(5,4)

//console.log("Result is : ",result);
function loginUserMessage(username){
    return `${username} just logged in now `
}

// console.log(loginUserMessage("vikramaditya"))

function calculatePrice(...num1){
         return num1 ;
}

// console.log(calculatePrice(20,50,60));

user = {
    username :"Vikramaditya",
    price :9999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username:"sam",
    price:2999
})


const myNewArray = [200,500,600,1000]

function returnSecondValue(allArray){
return allArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,600,700,300]));