// const myArray = [];
// %DebugPrint(myArray); // to check the array type and optimization type . for this we need to run this in D8 engine



//  Continius  and  Hopley   >>>> two types of array



// in both array type there are these three types of optimization
// SMI(Small Integer)  
//Packed elements
//Double (float , string , function ....)

const arryTwo = [1,2,3,4,5,];
// PACKED_SMI_ELEMENTS

arryTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arryTwo.push('7');
// PACKED_ELEMENTS


arryTwo[10] = 10;
// HOLEY_ELEMENTS

console.log(arryTwo);
console.log(arryTwo.length);
console.log(arryTwo[9]); // undefined

// How engine finds element in array
// 1. Bound Check (Check if the index is within the range of the array // 0 to length-1)
// 2. hasOwnProperty(arryTwo, 9) //(Check if the element is a hole or not)
// 3.HasOwnElement(arryTwo.prototype, 10) // (Check if the element is present in the array prototype or not)
// 4. haOwnProperty(Object.prototype, 10) // (Check if the element is present in the object prototype or not)


// HOLES are very expensive in js (terms of memory and performance). so try to avoid holes in array


const arryThree = [1,2,3,4,5,];
console.log(arryThree[2]);

// Optimization in array

// SMI > DOUBLE > PACKED > HOLEY  (this is the order of optimization overvall)

// SMI > PACKED > DOUBLE >  (this is the order of optimization in array continius array)
// HSMI > HDOUBLE > HPACKED > HHOLEY  (this is the order of optimization in array hopley array)

// If once optimization is downgraded then it will not be upgraded again. so be careful while using array

const arrFour = new Array(3);
// HOLEY_SMI_ELEMENTS
arrFour[0] = '1'; // HOLEY_ELEMENTS
arrFour[1] = '2'; // HOLEY_ELEMENTS
arrFour[2] = '3'; // HOLEY_ELEMENTS

/* optimization for making this arry is very bad first we created a HOLEY_SMI_ELEMENTS array and then we added 
some elements to it so it became HOLEY_ELEMENTS array.so try to avoid this type of array creation   */

// instead of this we can use this
const arrFive = ['1', '2', '3'];
// PACKED_ELEMENTS

// OR THIS
const arrSix = [] // take an empty array
//SMI_ELEMENTS
arrSix.push('1'); // PACKED_ELEMENTS
arrSix.push('2'); // PACKED_ELEMENTS
arrSix.push('3'); // PACKED_ELEMENTS


// so try to avoid creating array with holes in it. it will be very expensive in terms of memory and performance

arraySeven = [1,2,3,4,5,];
// PACKED_SMI_ELEMENTS
arraySeven.push(NaN); // PACKED_DOUBLE_ELEMENTS
arraySeven.push(Infinity); // PACKED_DOUBLE_ELEMENTS

// also avoid NaN and Infinity in array. it will downgrade the optimization of array


// for , for-each , for-of
// all engine recomend to use these pre-built methods ,because it is optimized by the engine itself .
