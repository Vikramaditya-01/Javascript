for(let i = 1 ; i <= 10 ; i++){
    if(i == 5 ){
        console.log("5 is the best number");
    }
    console.log(i)
}

for(let i=0;i<=9; i++){
    console.log(`for ${i}`);
    
    for(let j = 0; j<= 2 ;j ++){
        console.log(`inner loop value is ${j} for loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }    
}

const myArray = ["Ironman" , "Thor" , "superman" , "Wonderwomen"]
for (let index = 0; index < myArray.length; index++) {
    if(myArray[index] == "Thor"){
        console.log("this is thor");
        continue;
    }
    const element = myArray[index];
    console.log(element);
    
}
