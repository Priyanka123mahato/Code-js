// function sayMyName(){
//     console.log("C")
//     console.log("H")
//     console.log("A")
//     console.log("D")
// }
// sayMyName()



/*
function add(num1,num2){
    console.log(num1+num2)
}
//add(3,"a")
//add(3,null)//null k sath add krne se 3 return hoga

const result =add(3,5)
console.log("Result ",result)//give result as undefined because hm kuch return nhi kiya h function k andar
*/



function add(num1,num2){
    return num1+num2
}
const result =add(3,5)
console.log("Result ",result)




function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("Chandrani"))
//console.log(loginUserMessage(""))//blank
//console.log(loginUserMessage())//undefined




//apply if in functions
function loginUserMessage(username){
    if(username==undefined){//if(!username)=>we can also do like this
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())



//we can pass default username if username is undefined then print this default usename otherwise if we pass then override the pass usename  with  default username
function loginUserMessage1(username="priyanka"){
    if(username==undefined){//if(!username)=>we can also do like this
        console.log("Enter a username")
        return
    }
    return `${username} logged in`
}
//console.log(loginUserMessage1())
console.log(loginUserMessage1("Chandrani"))//override it with default




//using rest operator in fuctions(...)
//1
function calculateCartPrice(...number1){
    return number1
}
console.log(calculateCartPrice(200,400,500))

//2
function calculateCartPrice2(value1,value2, ...number2){
    return number2//it return as a from of array and here 500 and 2000 stored in the array because value1 and value2 take first two values
}
console.log(calculateCartPrice2(200,400,500,2000))





//pass object in the function
const user={
    usern:"Chandrani",
    price:199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.usern} and price is ${anyObject.price}`)

}
//handleObject(user)
handleObject({
    usern:"priyanka",
    price:399
})



//pass array in the function
const myNewArray=[200,400,100,500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,400,500,600]))