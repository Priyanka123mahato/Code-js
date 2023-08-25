//Primitives
//String(string),Number(number),Boolean(boolean),null(object),undefined(undefined),Symbol(symbol),BigInt(bigint)

const score=100
const score1=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)
const bigNumber=345678898979708090n;


//Reference(NOn primitive)
//Array(object),Objects(object),Functions(function)
const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"Chandrani",
    age:22,
}

const myFunction = function(){
    console.log("Hello World")
    
}

console.log(typeof myFunction)
//******************************************************************** 
//stack(primitive)   
let myYoutubename="Chandrani Mahato"

let anotherName=myYoutubename
anotherName="priyanka"

console.log(myYoutubename)
console.log(anotherName)
//In stack memory only copy pass, so real data will not change

//Heap(Non-Primitive)
let userOne={
    email:"abc@gmsil.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="priya@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
//In Heap reference will pass,means the real data will change
