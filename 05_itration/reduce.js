const myNumber = [1,2,3,4,5,6,7,8,9,10]

const myTotal = myNumber.reduce( function (acc , carrval){
 return acc + carrval ;
} , 0 )
console.log(myTotal);

const value = myNumber.reduce((acc , currvalue) => acc+currvalue,0)
console.log(value);



const soppingCart = [    
    {
    itemName : "Javascript Course",
    Price : 9999
    },
    {
    itemName : "python Course",
    Price : 1500
    },
    {
    itemName : "Web devlopement Course",
    Price : 25000
    },
    {
    itemName : "AI-ML Course",
    Price : 15000
    },
]

const cart = soppingCart.reduce( (accmulator,item) => accmulator + item.Price, 0)
console.log(`Total cost of all the course that you purchased is ${cart}`)