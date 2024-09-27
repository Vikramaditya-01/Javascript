// var c = 300
let a = 200

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log(`Inner a : ${a}`);
    
    
} else {
    
}




console.log(a)
//console.log(b)
// console.log(c)


function one (){
    const username = "Vikramaditya-01"
    function two (){
        const website = "github"
        console.log(username);
        
        
    }
    console.log(website);
    two()
    
}
// one()

//++++++++++++++++++++++++Interisting+++++++++++++++++++++++++++++++++++++++++++//

console.log(addOne(5));


function addOne(num){       /// simple function
 return num +1 ;
}

// console.log(addTwo(6));


const addTwo = function(num){       /// it's also an function but it's called Expession
    return num + 2 ;
}