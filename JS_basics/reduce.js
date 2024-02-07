//reduce is used to add the whole array elements value
//reduce uses function as parameter and function will have two parameters :
//Accumulator:which holds the previsious total 
//current value: which hold the value of current array element

//eg: Adding the total shopping cart value

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "Java course",
        price : 1999
    },
    {
        itemName : "Python course",
        price : 2999
    }
]

//using reduce we can get the total price value of all the objects
const totalToPay = shoppingCart.reduce( (acc,items)=>{
    return acc + items.price
}, 0)

console.log(totalToPay);