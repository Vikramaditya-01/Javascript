const user = {
    
        _username :'Munmun',

    
    
    get username() {
        return this._username.toUpperCase();  
    },
    set username(value) {
    
        this._username = value;
    },
    
}

const tea = Object.create(user);

console.log(user.username)
console.log(tea.username)
console.log(tea._username)