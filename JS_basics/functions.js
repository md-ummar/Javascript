//fuctions in dept
//funcction with singel parameter and argumnet
/*    function simpleUsername(name){

        console.log(`user name is ${name}`)

    }

    simpleUsername("ummar") */

//Functions with written and console difference

/*function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
result = addTwoNumbers(3,4);
console.log(`Results : ${result}`);*/ //result is undefined because it does not store value

/*function addTwoNumbers(num1, num2){
    return num1 + num2
}*/

// function with multiple parameters which is not known 
// we can do that by using rest operator
function calculateKartPrice(...num1){
    return num1
}
//console.log(calculateKartPrice(100, 200, 300))


//function with objects
const user = {
    username:"hitesh",
    price: 199
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handelObject(user)
/*handelObject({
    username:"sam",
    price:399
})*/

//Functions using arrays
const myNewArray = [200, 300, 400 ,500]

function secondValueOfArray(getArray){
    return getArray[1]
}

console.log(secondValueOfArray(myNewArray))


