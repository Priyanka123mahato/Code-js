//For-each
const coding =["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{//this for-each loop don't return anything
    //console.log(item)
    //return item;
})
//console.log(values)//print undefined because we can't store value in a variable using for-each loop(it do not return anything)




//Filter===>
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter( (num) => num>4)//Filter method returns the elements of an array that meet the condition specified in a callback function.
/*
const newNums=myNums.filter( (num) => {
    return num>4
})
*/
console.log(newNums)



//upper case we also do using 'for-each' loop in this way
const newNum=[]
myNums.forEach((num)=>{
if(num>4){
    newNum.push(num)
}
})
console.log(newNum)



//Another example of filter method
const books=[
    {title:'Book one',genre:'Friction',publish:1981,edition:2004},
    {title:'Book two',genre:'Non-Friction',publish:1999,edition:2008},
    {title:'Book three',genre:'History',publish:1992,edition:2007},
    {title:'Book four',genre:'Non-Friction',publish:1989,edition:2010},
    {title:'Book five',genre:'Science',publish:2009,edition:2014},
    {title:'Book six',genre:'Friction',publish:2000,edition:2010}
];

//let userBooks=books.filter((bk)=>bk.genre==='Friction')
//let userBooks=books.filter((bk)=>bk.publish>=2000)

//let userBooks=books.filter((bk)=>{return bk.genre==='Friction'})//if use clurly brases then u have to use 'return' otherwise it gives empty set of array=>[]

const userBooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre=='Friction'
})
console.log(userBooks)
