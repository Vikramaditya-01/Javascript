// let myName = "Vikramaditya   ";
// myName.truelength()

let myHero = ["Hulk" , "Ironman" , "Thor" , "Captain America" , "Black Widow" , "Hawkeye"];

let heroPower = {
    Hulk : 100,
    Ironman : 90,
    Thor : 95,
    CaptainAmerica : 85,
    BlackWidow : 80,
    Hawkeye : 75,
    getThorPower : function(){
        console.log(`Thor Power is ${this.Thor}`);
        
    }
}

heroPower.getThorPower();

Object.prototype.vikramaditya = function(){
    console.log("Vikramaditya Gorai is a Web Developer");
}


heroPower.vikramaditya();
myHero.vikramaditya();

// let myName = "Vikramaditya Gorai";
// myName.vikramaditya();
// console.log(myName);

Array.prototype.HeyVirkramaditya = function () {
      console.log("Vikramaditya is here");
      
}

myHero.HeyVirkramaditya();
//heroPower.HeyVirkramaditya();


//////////////////////////  Prototype Inheritance  //////////////////////////


const user = {
    name : 'abc',
    id : 123
}

const Teacher = {
   isTeaching : true
}

const supportAssistance = {
    isAvailable : false
}

const TAsupport = {
    makingNotes : true,
    subject : 'js',
    fullTime : true ,
    __proto__ :supportAssistance ,
}

Teacher.__proto__ = supportAssistance ;

////////   Morden Approch ///////////

Object.setPrototypeOf(Teacher , user)



///////////// //////////////// //////////////// /////////


let anotherUsername = "munmun    "

String.prototype.truelength = function(){
    console.log(this);
    console.log(`the true length is ${this.trim().length}`); 
}


anotherUsername.truelength()
console.log(anotherUsername.length)
'Water'.truelength()
'tea'.truelength()
'coffe'.truelength()


let myName = "Vikramaditya   ";
myName.truelength()

