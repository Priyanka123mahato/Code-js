const course ={
    coursename:"JS",
    price:"999",
    courseInstructor:"Chandrani"
}

console.log(course.courseInstructor)


const{courseInstructor}=course
console.log(courseInstructor)
const{courseInstructor:instructor}=course
console.log(instructor)




//destructuring objects
// const navbar=({company})=>{

// }
// navbar(company="Chandrani")





//**************JSON FORMAT************
//API object format
// {
//     "name":"Chandrani",
//     "coure":"Java",
//     "price":"free"
// }


//ApI array format
// [
//     {},
//     {},
//     {}
// ]
