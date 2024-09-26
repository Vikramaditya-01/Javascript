//const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "vicky"
tinderuser.isLogged = false

 console.log(tinderuser);

const ragulerUser = {
    Email : "someone@gmail.com",
    FullName : {
        userName : {
            userfullName : {
                firstName: "Vikramaditya",
                lastName : "Gorai"
            }
        }
    }
}

console.log(ragulerUser.FullName.userName.userfullName.firstName);


const obj1 ={ 1 : "a" , 2 : "b" }
const obj2 ={ 3 : "c" , 4 : "d" }
const obj4 ={ 5 : "e" , 6 : "f" }

//const obj3 = Object.assign( {} , obj1 , obj2 , obj4)

const obj3 = { ...obj1 , ...obj2 , ...obj4 } // here we also using spread 

console.log(obj3)

const user = [
    {
        id : 1 ,
        Email : "a@gmail.com"
    },
    {
        id : 2 ,
        Email : "b@gmail.com"
    },
    {
        id : 3 ,
        Email : "c@gmail.com"
    },
    {
        id : 4 ,
        Email : "d@gmail.com"
    },
    {
        id : 5 ,
        Email : "e@gmail.com"
    },
]

console.log(user[3].Email);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("name"));


course = {
    courseName: "java Script",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor)  // simple style but printing each time we need to right this again and again .

const {courseInstructor : instructor} = course // here we don't need to use . everythime 
console.log(instructor);

