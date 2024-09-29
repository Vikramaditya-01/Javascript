const myarry = ["vikram" , "raj" , "munmun"]

myarry.forEach(name => {
    console.log(name);          // method one using arrow function
    
});

myarry.forEach( function (name) {
    console.log(name);                // method two0 using simple function
} )


myarry.forEach( printname );        // calling the function
function printname(name){            // // method three using outside function
    console.log(name);  
}



myarry.forEach( (name , index , arr) => {
    console.log(name , index , arr);         
    
});

const mycoding = [
    {
        languageName : "javascript",       // object 1
        languageShortName : "js"
    },

    {
        languageName : "python",       // object 2
        languageShortName : "py"
    },

    {
        languageName : "java",     // object 3
        languageShortName : "j"
    }
]

mycoding.forEach( (obj) => {
    console.log(obj.languageName, obj.languageShortName);
})