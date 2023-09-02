/*
const user={
    username:"chandrani",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)//print the current object
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);//empty object return =>{}======>inside node environment we have empty object here

*/



/*
function chai(){
    let username="Priyanka Mahato"
    console.log(this.username)//object k andar hm aise kr sakte h but function k andar krne se 'undefined' result dega
    //console.log(this)
}
chai()

*/


/*
const chai2= () =>{
    let username="Priyanka Mahato"
    console.log(this.username)//undefined
    console.log(this)//{}===============>inside node environment we have empty object here
}
chai2()
*/


//Arrow function type
//1.explicit arrow function
// const addTwo =(num1,num2) =>{
//     return num1+num2
// }

//2.implicit arrow function
//const addTwo =(num1,num2) => num1+num2
//const addTwo =(num1,num2) => (num1+num2 ) 
const addTwo =(num1,num2) => ({username:"hitesh"})//provide obj like this

console.log(addTwo(3,4))

//interview(inside browser global object known as window)()