/*
var c=300
let a=40
if(true){
    let a=10
    const b=20
    //var c=30
    c=30
}
//we can't access a and b outside of the loop but var type variable is differnt
console.log(c)//30
console.log(a)//we can access outside if block a varible
*/


/*
function one(){
    const username="priya"

    function two(){
        const website="coding"
        console.log(username)
    }
   // console.log(website)=>error
    two()
}
one()
*/


/*
if(true){
    const user="Chand"
    if(user==="Chand"){
        const web="youtube"
        console.log(user + web)
    }
    //console.log(web)=>error
}
//console.log(use)=>error
*/


//****INTERESTING****************************/
//nornal function declaration
console.log(addone(5))//==it is possible to call before
function addone(num){
    return num+1
}
console.log(addone(5))


//function declaration and store it in a variable(called function expression)
//console.log(addTwo(5))not possible
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))
