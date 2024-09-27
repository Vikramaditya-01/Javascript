// Immediately Invoked Functions Expression(IIFE)

(function cahi(){  // named IIFE
    console.log("Database of cahi is Connected");  
})() ;

( () => {
    console.log("Database of coffe is Connected");  
})();

( (name) => {
    console.log(`welcome to our Database ${name}`);  
})("Vikramaditya");