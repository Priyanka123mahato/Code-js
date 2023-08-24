const accountId = 144553;//constant variable

//2 way variable declaration
/*
prefer not to use var
because of issue in block scope and functional scope
*/
let accountEmail = "priyorit703@google.com"
var accountPassword ="1234"
accountCity="Purulia"//aise v kr sakte h but aise nhi krna nhi better h
let accountState;
 
//accountId=2 //not allowed

accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])