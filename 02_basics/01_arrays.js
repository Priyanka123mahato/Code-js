//array
//shallow copy=> Shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.
//deep copy=>Deep copy of an object isca copy whose properties do not share the same references as those of the source object from which the copy was made. 
 const myArr=[0,1,2,3,4,5]
 const myHeros=["shaktiman","naagraj"]
 console.log(myArr[1])

 //Array Methods
/*
 myArr.push(6)
 myArr.push(7)
 myArr.pop()//pop the last enter element
 console.log(myArr)

 myArr.unshift(9)
 console.log(myArr)//9 add in the first index
 myArr.shift()//use to remove frist index elemt
 console.log(myArr)

 console.log(myArr.includes(9))//false
 console.log(myArr.indexOf(3))

 const newArr = myArr.join()

 console.log(myArr)
 console.log(newArr)
 console.log(typeof newArr)
*/
 //slice , splice

 console.log("Main Array:-",myArr);

 const myn1=myArr.slice(1,3)//returns a piece of the array but it does not affect the original array
 console.log("slice arr:-",myArr)
 console.log("slice element:-",myn1)

 const myn2=myArr.splice(1,3)//splice changes the original array by removing,replacing,or adding values and return the affected values
 console.log("splice arr:-",myArr)
 console.log("splice element:-",myn2)


 