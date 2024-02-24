//for of ststements
//for of on array

//syntax
// for (element of iterable) {
//     // body of for...of
// }

const arr =[1,10,15,16,20,25,30];
for(const i of arr){
    //console.log(i);
}

//for of with Map datatype

const map = new Map();
map.set('name','Prafull Kumar Yadav');
map.set('city','Ghazipur U.P.');
map.set('email','prafullya2gmail.com');
//console.log(map);

for([key,value] of map){
    //console.log(key+ ": "+value);
}

// for of with objects
const obj= {
    name:"Prafull",
    rollno:35,
    college:"Hewett",
    city:"Renukoot"
}

// for([key,value] of obj){
//     console.log(key+ ":-" +value);
// }

//** not iterable on object **

  
