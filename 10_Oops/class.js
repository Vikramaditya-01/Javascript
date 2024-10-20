class user{
    constructor(userName , email , password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return (`${this.password}vdffe${this.password}16541${this.password}`);
    }

    changeUserName(){
       return this.userName = `${this.userName.toUpperCase()}`;
    }



}


const user1 = new user('Vikramaditya' , 'vikramadityagorai@gmail.com' , 'au28fbswk');

console.log(user1.encryptPassword());
console.log(user1.changeUserName());



//////// Behind The Scence //////////

function user (userName , email , password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return (`${this.password}vdffe${this.password}16541${this.password}`);
}

user.prototype.changeUserName = function(){
    return this.userName = `${this.userName.toUpperCase()}`;
}

const user2 = new user('Munmun' , 'abc@gmail.com' , '123456');
console.log(user2.encryptPassword());
console.log(user2.changeUserName());

