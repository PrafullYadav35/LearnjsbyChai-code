// let fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let success = true; // Change this to false to see the rejected state

//         if (success) {
//             resolve("Data fetched successfully!");
//         } else {
//             reject("Failed to fetch data.");
//         }
//     }, 2000); // Simulates a 2-second network request
// });

// // Handling the promise
// fetchData
//     .then((message) => {
//         console.log(message); // This runs if the promise is resolved
//     })
//     .catch((error) => {
//         console.log(error); // This runs if the promise is rejected
//     });



//Code Example with Real-Life Analogy
//khud se code likh rha hu bina dekhe 

let deliveryPackage = new Promise(
    
   (resolve,reject)=>{
    setTimeout(()=>{
        const packageArrive = true;
    
        if(packageArrive){
            resolve("Package was Delivered succesfully");
        }
        else{
            reject("Sorry parcel is rejected due to some issue");
        }
    },10000);            //10 second bad execute hoga 
   } 
)

deliveryPackage
.then((m)=>{
    console.log(m);
})
.catch((error)=>{
console.log(error)
});