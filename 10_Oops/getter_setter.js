class user {
    constructor(username, password , Email) {
        this.username = username;
        this.password = password;
        this.Email = Email;
    }
    
    get username() {
        return this._username.toUpperCase();  
    }
    set username(value) {
    
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value){
         this._password = value ;

    }

    get Email(){
        return this._Email.toLowerCase();
    }
    set Email (value){
        this._Email = value;
    }

}





const user1 = new user('john', '12354' , 'VIKRAMADITYAGORAI@GMAIL.com');
console.log(user1.username);
console.log(user1.password);
console.log(user1.Email);

console.log(user1._username);
console.log(user1._password);
console.log(user1._Email);

