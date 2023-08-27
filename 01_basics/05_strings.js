const name="hitesh"
const repoCount=50

console.log(name+repoCount+" Value");

//console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName=new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString =gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne=" hitesh "
console.log(newString)
console.log(newStringOne.trim())//remove whitespace characters plus line terminater

const url="https://chandrani.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('chandrani'))

//store string in the array
const variable = "I-Love-You";
console.log(variable.split('-'))
