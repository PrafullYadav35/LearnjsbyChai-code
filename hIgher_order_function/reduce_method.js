const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acculator,currentValue){
   //console.log(`accumlator: ${acculator} and Current Value :${currentValue}`)
    return acculator+currentValue
},0)

//console.log(myTotal)

//arrow function me likhna 
const totalValue = myNums.reduce((acc,curvalue)=>acc+curvalue,0)
// console.log(totalValue)

const shoppingCart = [
    {
        itemName:"CUET Books",
        price:399
    },
    {
        itemName:"Blue Mens T-Shirt",
        price:599
    },
    {
        itemName:"5G smartphone",
        price:18999
    },
    {
        itemName:"Home gym set",
        price:1999
    },
];

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(` only ${priceToPay} Rupees`)

/* THEORY:
The reduce function in JavaScript is a powerful method used to process an array and return a single accumulated
 result. It's particularly useful for operations like summing values, averaging, or flattening arrays.

array.reduce(callback(accumulator, currentValue, index, array), initialValue);


 callback: A function to execute on each element in the array.
accumulator: The accumulated result from the previous callback execution.
currentValue: The current element being processed.
index (optional): The index of the current element.
array (optional): The array reduce was called upon.
initialValue: The initial value for the accumulator (optional but recommended).
 */