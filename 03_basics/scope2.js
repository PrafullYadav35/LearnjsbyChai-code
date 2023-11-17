// function se scope & hoisting samaghana
function one(){
    const name ="Prafull Kumar yadav";

    function two(){
        const adress ="Faridaha Khanpur Ghazipur";
        //console.log(name);
    }
    // console.log(adress);//acess nhi kr skte 
    two();
}
one();

//if se hoisting smaghana

if(true){
    const username ="Prafull Yadav";
    if(username==="Prafull Yadav"){
        const startup ="faltuCoder";
        //console.log(username +" founder of "+ startup);
    }
    // console.log(startup);//not accessible 
}

//two types of function declarartion

function addone(num){
    return num+1;
}
addone(9);

// const addtwo= function(num){
//     return num+2;
// }


//mu doubt 
const addtwo= function f2(num){
    return num+2;
}
console.log(addtwo(10));
// console.log(f2(10));//can not access with f2