let myDate = new Date();
// console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());


//new Date(year,month,day)
//let myCreatedDate = new Date(2024,0,24);  //0- january & 11 - December


//new Date(year,month,day,hours,minutes)
//let myCreatedDate = new Date(2024,0,24,5,3);


//new Date(date string)
let myCreatedDate = new Date("2024-02-28");

//let myCreatedDate =  new Date("28-02-2024"); //output:  invalid date 

console.log(myCreatedDate.toLocaleString());
// toLocaleString() method date & time btata  hai kewal

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now())/1000);

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
