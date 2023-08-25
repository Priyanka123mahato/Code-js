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