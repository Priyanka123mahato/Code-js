//const userEmail="priyo@gmail.com"
const userEmail=""
//const userEmail=[]
//const userEmail={}
if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

//falsy values=>false,0,-0,BigInt,0n,"",null,undefined,NaN
//Truthly values=>"0",'false'," ",[],{},function(){}


//check how a arry is empty or not
if(userEmail.length===0){
    console.log("Array is empty")
}

//check a object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//Nullish Coaescing Operator(??) null undefined
let val1;
//val1=5 ?? 10
//val1=null?? 10
//val1=undefined ?? 10
val1=null ?? 16 ?? 10
console.log(val1)

//false==0(true)
//false==""(true)
//0==''(true)

