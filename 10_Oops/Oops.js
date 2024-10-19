const user ={
    username : 'vikramaditya',
    password : '123',
    email : 'vikramadityagorai@gmail.com',
    signIn : 'User is Signed In',
    getUserDetails : function(){
        console.log(this.username);
        console.log(this.email);
    },
}


function user1 ( username , LoginId , IsLogin){
        this.username = username ;
        this.LoginId = LoginId ;
        this.IsLogin = IsLogin ;
        return this;
}

const userOne = new user1("Vikrramaditya" , "Vikramaditya-01" , true)
const userTwo =  new user1("Javascript" , "jahdhdhgdsddcsad" , false)

console.log(userOne);
console.log(userTwo);

