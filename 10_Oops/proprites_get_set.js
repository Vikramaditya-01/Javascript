function user (email ,password){
      this._email = email;
      this._password = password;
       

       Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this.email = value;
        }
       })


}

const user1 = new user( 'vikramadityagorai@gmail.com' , '12345');
console.log(user1.email);