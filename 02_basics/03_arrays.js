//singleton:-array created in constructor way then called singleton
//object literals or constructor literals or object constructor
/*
const JsUser={
    name:"Chandrani",
    age:22,
    location:"jaipur",
    email:"Chandrani@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//2way
console.log(JsUser.email)
console.log(JsUser["email"])
*/
const mysym=Symbol("key1")
const JsUser1={
    name:"Chandrani",
    "full name":"Chandrani Mahato",
    [mysym]:"mykey1",//symbol typevvariable declare inside []
    age:22,
    location:"jaipur",
    email:"Chandrani@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(JsUser1.email)
// console.log(JsUser1["email"])
// console.log(JsUser1["full name"])
// console.log(JsUser1[mysym])//access like this ->symbol variable

// JsUser1.email="priyankagmail.com"
// Object.freeze(JsUser1)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties. Object on which to lock the attributes.
// JsUser1.email="priyankagoogle.com"
// console.log(JsUser1)

JsUser1.greeting=function(){
    console.log("Hello JS user")

}
JsUser1.greetingTwo=function(){
               //String backtiks--->called String enterpolation
    console.log('Hello JS user '+ JsUser1.name)

}

console.log(JsUser1.greeting())
console.log(JsUser1.greetingTwo())
