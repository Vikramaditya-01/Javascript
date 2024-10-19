const promiseOne = new Promise(function(resolve , reject){
    // Do Async task
    // DB Query , Cyptography , Network Request
    setTimeout(function(){
     console.log("Async task is Done");
       resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise is Resolved");
});

///////////////////////////  /////////////////////////////// //////////////////////////// /////////////////////////////////// ////////////

new Promise(function(resolve , reject){
    setTimeout(function(){
     console.log("Async task 2 is Done");
       resolve();
    }, 1000);
}).then(function(){
    console.log("Promise 2 is Resolved");
});

///////////////////////////  /////////////////////////////// //////////////////////////// /////////////////////////////////// ////////////

const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
     
       resolve({username : "Vikramaditya-01" , Email : "vikramadityagorai@gamil.com"});
    }, 1000);
})

promise3.then(function(user){
        console.log(user);
        
})


///////////////////////// //////////////// /////////////////////////////////////   ///////////////////////////////// //////////////////////

const promis4 = new Promise(function(resolve , reject ) {
    setTimeout(() => {
        error = true;
        if (!error) {
           resolve({username : "Vikramaditya" , Password : "123"}) 
        } else {
            reject("Error : Something is Wrong ")
        }
    }, 1000);
})

promis4.then(function(user){
        console.log(user)
        return user.username
}).then((username) => {
       console.log(username);
       
}).catch((error) => {
  console.log(error);
  
}).finally(() => console.log('The Promise Is Resolved Or Rejected'))


////////////////////// ////////////////////// /////////////////////////////// /////////////////////// //////////////////////////////////////



const promise5 = new Promise( (resolve , reject) => {
    setTimeout(() => {
     let error = true
     if(!error){
        resolve({username : 'javascript' , Password : '15761'})
     } else {
        reject('Error : something is wrong')
     }
    } , 1000 )
})

async function consumepromise5() {
      try {
        const response  = await promise5    
        console.log(response);
      } catch (error) {
        console.log(error);
        
      }
      
}

consumepromise5()


///////////////////////// ////////////////////////////////// //////////////////////////////////////// //////////////////////////// //////////////



async function getAlluser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E : ', error);
        
    }
    
}
getAlluser()


fetch('https://api.github.com/users/Vikramaditya-01')
.then((userdata)=>{
      return userdata.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
  log(error)
})