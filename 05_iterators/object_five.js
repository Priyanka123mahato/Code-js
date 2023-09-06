const myObject={
    js:'javaScript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    //console.log(key)
    console.log(`${key} shortcut is for ${myObject[key]}`)
}



//Array 
const program=["js","rb","py","java","cpp"]

for(const key in program){
    //console.log(key)
    console.log(program[key])
}