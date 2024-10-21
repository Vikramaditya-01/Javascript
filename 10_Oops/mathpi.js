console.log(Math.PI); // 3.141592653589793

// Math.PI = 5;
// console.log(Math.PI); // 5


// const discripter =  Object.getOwnPropertyDescriptor(Math, 'PI');


// console.log(discripter);

const cahi = {
    name  : 'Ginger cahi',
    price : 500,
    isAvailable : true,
    orderCahi : function(){
        console.log('Cahi nahi bani hai');
    }
}

console.log(Object.getOwnPropertyDescriptor(cahi , 'name'));


Object.defineProperty(cahi , 'name' ,{
    writable : false,
    enumerable : false,
    configurable : false ,
})


 console.log(Object.getOwnPropertyDescriptor(cahi , 'name'));


for (const [key , value] of Object.entries(cahi)){
    if(typeof value !== 'function'){
    console.log(key , value);   
}

}
