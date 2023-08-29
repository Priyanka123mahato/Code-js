//Date

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreatedDate=new Date(2023,0,23)//year month date
console.log(myCreatedDate.toDateString())

let myCreatedDate2=new Date(2023,0,23,5,3,2)//year month date hr min second
console.log(myCreatedDate2.toLocaleString())

//let myCreatedDate3=new Date("2023-01-14")
let myCreatedDate3=new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)//return value till now from your given date in mili sec
console.log(myCreatedDate.getTime())//return value till now from your given date in mili sec
console.log(Math.floor(myTimeStamp/1000))//convet time mili sec to sec***

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)//get exactly the month
console.log(newDate.getDay())

let newDate2=newDate.toLocaleString('default',{
    weekday:"short"
    //weekday:"long"
})
console.log(newDate2)


