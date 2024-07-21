const arr =[1,2,3,4,5];
//for of loop
for (const num of arr) {
    //console.log(num)
}
//object , array , string pr bhi for off loop  lga skta hai


const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"Indiaa")

//console.log(map)
for (const [key,values] of map) {
    //console.log(key,':- ',values);
    
}

//object pr for of iterable nhi hai 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,":- ", value)
// }
//TypeError TypeError: myObject is not iterable


/*
THEORY:

The Map object in JavaScript is a collection of key-value pairs 
where both keys and values can be of any data type. 
Unlike regular objects, Map maintains the insertion order of its elements.


Map is a collection of key-value pairs.
Keys can be any type.
Methods include set(), get(), has(), delete(), clear().
Use the size property to get the number of elements.
Iterates in insertion order.
*/