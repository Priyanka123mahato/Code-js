//reduce()===>acc me first jayega  initial value  then jo value function return karega wo jaayega
//aur current value means array ka value 
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
//****the help og reduce()we acn easily get the total sum of arr

const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0)
console.log(myTotal)




const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"Mobile dev course",
        price:3999
    },
    {
        itemName:"data Science course",
        price:12999
    }
]
const priceTopay=shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(priceTopay)