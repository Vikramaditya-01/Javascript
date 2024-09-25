const Marvel_Heros = ["Ironman" , "Thor" , "Wanda"]
const Dc_Heros = ["Superman" , "Batman" , "Wonder Women"]

Marvel_Heros.push(Dc_Heros)
console.log(Marvel_Heros);
console.log(Marvel_Heros[3]);
console.log(Marvel_Heros[3][2]);

const AllHeros = Marvel_Heros.concat(Dc_Heros)  // concat can only add two array 
console.log(AllHeros);

const all_Heros =[...Marvel_Heros , ...Dc_Heros]    // spread operator use to spread all things and can add as many array as you want 
console.log(all_Heros);

const anotherArray = [ 1 , 2 , 3 , [ 5 , 9 , 3 ] , 7 , 6 , 4 , 9 , [ 1 , 55 , 32 , [ 12 , 45 , [ 1 , 2 , 3 , 4 ] , 45 ] ] ] 
console.log(anotherArray);
const RealAnotherArray = anotherArray.flat(Infinity) // flat method is udes to spread out all subArray to make an single arry
console.log(RealAnotherArray);

console.log(Array.isArray("vikramaditya"));  /// asking that is this an array or not ???
console.log(Array.from("vikramaditya"));     // creat an array from any value that is given in input
const score1 = 500
const score2 = 264
const score3 = 479
const score4 = 846

console.log(Array.of(score1,score2,score3,score4))