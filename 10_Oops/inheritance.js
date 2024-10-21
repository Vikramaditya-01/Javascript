class user  {
      constructor(username){
             this.username = username;
      }

      logme(){
        console.log(`your Username is ${this.username}`);
      }
}



class Teacher extends user{
    constructor(username  , Email , password){
        super(username);
        this.Email = Email;
        this.password = password;
    }

    addCourse(course){
        console.log(` Course is added by ${this.username}`);
    }
}

user1 = new Teacher('Vikramaditya' , 'Vikramaditya@gmail.com' , '123456');
user1.addCourse('Javascript');
console.log(user1.Email);
user1.logme();

raj = new user('Raj');
raj.logme();
// raj.addCourse('Javascript');     // this function is not assacible for raj because it is not inherited from user class

console.log(raj === user1);  // false     because they are not same object but they are instance of user class
console.log(raj instanceof user);  // true



