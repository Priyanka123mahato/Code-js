//const tinderUser = new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Priya"
tinderUser.isloggedIn=false
console.log(tinderUser)

const regularUser={
    email:"pinku703@gmail.com",
    fullname:{
        userfulname:{
            firstname:"chandrani",
            lastname:"Mahato"
        }
    }
}
console.log(regularUser.fullname.userfulname.firstname)

 const objt1={1:"a",2:"b"}
 const objt2={3:"a",4:"b"}
 const objt5={5:"a",6:"b"}

                        //target,source
const objt3=Object.assign(objt1,objt2)//The target object to copy to.Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(objt3)
const objt6=Object.assign({},objt1,objt2,objt5)
 console.log(objt6)

 const objt7={...objt1,...objt2}
 console.log(objt7)

const users=[
    {
        id: 1,
        email: "priyorit@gmail.com"
    },
    {
        id: 2,
        email: "priyorit703@gmail.com"
    },
    {
        id: 3,
        email: "priyamka@gmail.com"
    },
]
console.log(users[2].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))//Returns an array of values of the enumerable properties of an object
console.log(Object.entries(tinderUser))//Returns an array of key/values of the enumerable properties of an object

console.log(tinderUser.hasOwnProperty('isloggedIn'))




