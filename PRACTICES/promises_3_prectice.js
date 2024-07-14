//practing from chai aur code github repositary

//create PromiseOne anr consume krna; 1 to 12
/*
const promiseOne = new Promise((resolve,reject)=>{
    //Do Async Task
    //Bb calls , file reading , network
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve()
    },2000)
})



promiseOne.then(
    ()=>{
        console.log("Promise Consumed");
    }
)

*/

/*
//new method whi kam krne ka ;14 - 22
new Promise(function(resolve,reject){
    setTimeout(function(){
console.log("Async task 2 is completed");
resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved");
})

*/

//crete promiseThrre isme data pass krenege resolve method se
/*
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"Prafull Yadav",email:"chai@code.com"})
    },1000)
})
promiseThree
.then(function(user){
    console.log(user);
})

*/

// create promiseFour catch and finally method use 
//krna ; 34line  - 54 line

const  promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"Pradhumn Kumar Yadav",password:"12345"})
        }else{
            reject('eroor : Something went wrong')
        }

    },1000)
})

promiseFour
.then(
    (user)=>{
        console.log(user);
        return user.username
    }
).then(
    (username)=>{
        console.log(username);
    }
).catch(
    (eroor)=>{
console.log(eroor);
    }
).finally(
()=>{
    console.log("The promise is either resolved or rejected");
}
)