//array literals

const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)//flat method returns a new array with all sub-array elements concatenated into it recursivelyup to the specified depth
// console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//convert string to array
console.log(Array.from({name:"hitesh"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//returns a set of element into a new array
