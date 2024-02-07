//for each does not return any vaue

//filter return the values

const arr1 = [1,2,3,4,5,6,7,8]
//method 1: No need to call return when curly braces not used
//const myarr = arr1.filter((num)=> num>3)
//console.log(myarr);

//method 2: when used curly braces we need to explicitly call return in arrow function
/*const myarr = arr1.filter((items) => {
    return items>3
})
console.log(myarr);
*/

//we can use for each to return but explicitly push has to be used 
/*let myarr1 = []
arr1.forEach((num) =>{
    if (num>3) {
        myarr1.push(num)
    }
})
//console.log(myarr1);*/

//Map used to perform any method on each element of the array

//const myarr = arr1.map((num) => num + 10 )
//console.log(myarr);

//Chaining:
//Using multiple map and filter methods 

const newArr = arr1
                .map( (nums) => nums * 10) //first map has original array values
                .map((nums) => nums + 1) //second map has the first maps functions performed values that is 10,20 ...
                .filter((nums)=> nums > 30)


console.log(newArr);                