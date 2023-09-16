const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);//current object username(print "hitesh")
        //console.log(`Username: ${username}`);==>gives error that username is not defined.so we have to use "this"
       // console.log(this);//this refers the whole current object
    }
}
//console.log(user.username)==>"hitesh"
//console.log(user.getUserDetails());
 //console.log(this);==>it print empty set object because in global environment this refers empty set object here===>"{}"






function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
    //return this nhi v karu toh v eya return krega because eya implicitly return ho jaata h
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//[Function: User]
console.log(userTwo);
console.log(userTwo.greeting());//Welcome ChaiAurCode
console.log(userTwo.greeting);//[Function (anonymous)]


// 1.create one Object
// 2.called constructor using new keyword(eha pe hm arguments pass krte h)
// 3.this keyword k through eya sab arguments set ho jata h
// 4.hmko function k andar mil jata h...eha se hm return kr leta h