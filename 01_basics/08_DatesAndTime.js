// Dates

let myDates = new Date()

console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
console.log(myDates.toLocaleTimeString());
console.log(myDates.toLocaleString()); // best
console.log(myDates.toTimeString());
console.log(myDates.getTimezoneOffset());
console.log(typeof(myDates));


//let createDate = new Date(2024,8,25 ,5,30,12)
let createDate = new Date("2024-10-03")
console.log(createDate)
console.log(createDate.toLocaleString());
console.log(createDate.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(createDate.getTime());


console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getTime());


 aaa = newDate.toLocaleString("default", {
    weekday : "long", 
    era : "long"
})

console.log(aaa)