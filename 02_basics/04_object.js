// const tinderuser = new Object()

// const tinderuser = {}

// tinderuser.id = "123abc"
// tinderuser.name = "vicky"

// console.log(tinderuser);

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
const obj2 ={ 5 : "a" , 6 : "b" }

const obj3 = Object.assign( {}, obj1 , obj2)
console.log(obj3)
