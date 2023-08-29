const score =400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(1))

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3))//take number between 1-21 and returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//*********************************** Math ***************************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.random())//return value from 0-1
console.log((Math.random()*10)+1)//shift the value in the left
console.log(Math.floor(Math.random()*10)+1)//to take 0 use Math.floor() its given the floor value------to need value 1-9 we need to add 1

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log(Math.ceil(Math.random()*(max-min+1))+min)
