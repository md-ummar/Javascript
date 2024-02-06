// Array high level specific for arrays and objects

// for of loop


//["","",""]
//[{},{},{}]

let arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(`Number :- ${num}`);//for of gives the values in array.
}

// for of with string
let str = "hellow hitesh"
for (const greet of str) {
    //console.log(`${greet}`);
}

//Map it is a object in javascript
// Map hols key-value pair collection
//Map tracks and remembers the order of insetion
//Map only holds unique values 

const map = new Map()
map.set('IN',"india ")
map.set('USA',"United states of america")
map.set('FR',"france")

//console.log(map)
//to output key and values seperately
for (const [key,value] of map) {
    //console.log(key,value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

//for of cannot be used on objects

//for in

const programming={
    "JS": "Javascript",
    CPP: "C++",
    PY :"python"   
}

//printing objects using forin
for (const key in programming) {
    //console.log(`${key} shortcuts is ${programming[key]}`);
    
}
const program = ["js","cpp"]
for (const key in program) {
    //console.log(key); // for in gives index values of the array when print ley
   
}

//Mostly used iteration working on arrays

const coding= ["js","ruby","python","cpp"]

coding.forEach