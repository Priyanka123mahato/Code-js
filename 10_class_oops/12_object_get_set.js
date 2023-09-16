//underscore means it indicate private properties
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)//User k base pe ek object creat karo aur usko tea k andar refer kr do
console.log(tea.email);