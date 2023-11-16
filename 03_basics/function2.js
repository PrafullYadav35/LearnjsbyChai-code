//function with objects
//passing multiple argument with spread operater 
function calculateCartPrice(...num1){

    return num1; 
   }
//console.log(calculateCartPrice("books","smartphone","shirts","jeans","T- Shirts"));   
//... spread operater return an array 

//passing objects 

const user ={
    name:"Prafull Kumar Yadav",
    age:20
}
function handleObject(anyObject){
    return `username is ${anyObject.name} and age is ${anyObject.age}` ;
}
//console.log(handleObject(user));
// console.log(handleObject(
//     {
//        name:"Shiva",
//        age:33 
//     }));


//passing an array to a function
const  rollNo = [89,367,56,67,56,67];
function getSecondValue(getArray){
    return getArray[1];
}
console.log(getSecondValue(rollNo));
