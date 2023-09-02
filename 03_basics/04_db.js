//Immediately invokedfunction expressions(IIFE)==global scope k polutions problem hoti h toh ghlobal scope k polution ko hatane kliye hmme IIFE ka use kiya h

// function chai(){
//     console.log(`DB connected using normal`)
// }
// chai()


//using IIFE
(function chai(){
    console.log(`DB connected using IIFE`)
})(); //semoconol is important if we use IIFE


( ()=> {
    console.log(`DB connected with arrow fubction using IIFE`)
})();

( (name)=> {
    console.log(`DB connected with arrow fubction using IIFE ${name}`)
})("Biswajit");