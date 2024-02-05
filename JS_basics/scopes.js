// Understanding Scopes
if(true){
    let a = 10
    const b = 20
    var c = 30
} 
//console.log(a);
//console.log(b);
//console.log(c);

//Hoisting functions

//console.log(addOne(5)) //function call posibel if we declare like this
function addOne(num){   //function declaration
    return num + 1
}


//function declaration assigned to variabel 

const addTwo = function(num){
    return num + 2
}
//console.log(addTwo(5))



//this keyword in regular functions
/*function one(){
    let username = "hitesh"
    console.log(this.username);// we cannot use this inside the functions only in objects can be used
}*/
//one()

//this keyword in arrow function
const OneArrow = () => {
    let username = "hitesh"
    console.log(this)
}
//OneArrow()

//Arrow Functions

//Need to use return keyword when used curly braces, explicit return
const twoAdd = (num1, num2) => {
    return num1 + num2
}
//console.log(twoAdd(2,3))

//Implicit return: no need to have return keyword when using braces

//const threeAdd = (num1, num2, num3) => (num1+num2+num3) //return is not used

//Immediately invoked functions expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//IIFE with arrow functions
//unnamed IIFE with parameters
((name)=>(console.log(`DB CONNECTED 2 ${name}`)))("hitesh")