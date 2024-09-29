const myNumber = [1,2,3,4,5,6,7,8,9,10]

const addedNumber = myNumber.map( num => num * 10)

////////////////////////// method chaining ////////////////

const newNums = myNumber
.map(num => num*10)
.map(num => num+1)
.filter(num => num > 50 )
console.log(newNums);
