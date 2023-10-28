const class_hewett= ["Shivam srivastwa ","Abhisek Yadav", "Chetan ","PratikmSahoo"];
const class_abic = ["Akash Singh","Ahisek","Sarvagya","Sonal Singhal"];
const new1 =  class_hewett.push(class_abic);  //cocatation of array
// console.log(class_hewett);

let newArr2 = class_hewett.concat(class_abic);
// console.log("newArr2 is  "+newArr2);
// console.log("class Hewett  " + newArr2);

//concat troght spread operator
const all_friend = [...class_hewett,...class_abic];
// console.log(all_friend);

//ek array ke element ko dusre Array me dalna 
// const arr_flat = class_hewett.flat(class_abic);
// let  arr_flat = arr_flat.flat(class_abic);
// console.log(arr_flat);

// console.log(Array.isArray(class_abic)); //check array hai ya nhi

// console.log(Array.isArray(newArr2));
console.log(Array.from("Prafull Kumar Yadav"));
console.log(Array.from({name:"Surya DADA"}));  //intresting // isko btaya nhi kis type ka arry bnana hai

console.log(Array.of("PINKI","MINKI ","sONI","sINKI"));  //

// aur pdie  Array.is(), Array.from(), Array.of( )  ke bare me