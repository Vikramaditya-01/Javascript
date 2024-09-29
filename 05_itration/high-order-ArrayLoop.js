//for of

const arr = [1 , 2 , 3 , 4 , 5 ]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World!"
for(greet of greetings){
    console.log(greet);
}


const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United state of america")
map.set('FR' , "France")
map.set('RU' , "Russia")
map.set('IN' , "India")

// console.log(map);
for (const [key , value] of map) {
    console.log(key);
    
}

const myObject = {
    game1 : "GTA-V",
    game2 : "Last 15 Days survive ",
    game3 : "Free Fire ",
    game4 : "Love is in small Things"
}

for (const [game] of myObject) {
    console.log(`${game}`);
}