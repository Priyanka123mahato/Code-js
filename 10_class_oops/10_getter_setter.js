class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
   //constructor and getter and setter ensonge use korle "_" use korte hoi otherwise error hbe
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);