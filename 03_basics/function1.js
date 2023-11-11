//
// }
// addTwoNumbers(100,199); //299
// addTwoNumbers("P",2);//P2

// addTwoNumbers(); //nan function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);

// const result = addTwoNumbers(100,200);
// console.log(result); //no output

function addTwoNumbers(num1,num2){

     return num1+num2; 
    }
 addTwoNumbers(28,22)//no output only function run   
//console.log(addTwoNumbers(28,22));//50    

const result = addTwoNumbers(100,200);
//console.log(result); //300
//parameter default value
function loginMessage(user = "Prafull Kumar Yadav"){
 if(user === undefined){
    console.log("please  enter a user name");
    return 
 }

    return `${user} you are just logged in`  //backtish string intupullation
}
// loginMessage("Prafull Kumar Yadav"); 
console.log(loginMessage("Surya Kumar Yadav"));