function setUserName(userName){

    // Complex DB call


    this.userName = userName;

}


function createuser(userName , email , password){
      

    setUserName .call(this,userName);
    this.email = email;
    this.password = password;


}


const user = new createuser('Vikramaditya' , 'abc@fb.com' , '123456');

console.log(user);
