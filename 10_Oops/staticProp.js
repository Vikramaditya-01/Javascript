class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    aboutuser() {
        console.log(`${this.name}'s Age is: ${this.age}`);
        
    }
    
    static creatUniqueId() {   // static is use here , that's why another object can't access this method
        console.log(`Unique Id for ${this.name}: ${Math.floor((Math.random() *1000000000000)+1)}`); 
    }

}

Vicky = new user('Vicky', 25);
Vicky.aboutuser();
//Vicky.creatUniqueId(); // Error: Vicky.creatUniqueId is not a function

class Teacher extends user {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    aboutTeacher() {
        console.log(`${this.name}'s Age is : ${this.age} and Subject: ${this.subject}`);
        
    }
}


munmun = new Teacher('Munmun', 30, 'Javascript');
munmun.aboutTeacher();
// munmun.creatUniqueId(); // TypeError: munmun.creatUniqueId is not a function   Because creatUniqueId is static method
munmun.aboutuser();
