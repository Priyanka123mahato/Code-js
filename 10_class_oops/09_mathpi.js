const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

 console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);==>value same because contructor can not be override

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//defineProperty() is used to add or modify properties
Object.defineProperty(chai, 'name', {
    //writable: false,
    //enumerable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}