// let promise = new Promise((resolve, reject) => {
//     let success = false; // Change this to false to see the rejected state

//     if (success) {
//         resolve("The operation was successful!");
//     } else {
//         reject("The operation failed.");
//     }
// });

// // Handling the promise
// promise
//     .then((message) => {
//         console.log(message); // This runs if the promise is resolved
//     })
//     .catch((error) => {
//         console.log(error); // This runs if the promise is rejected
//     });




let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true; // Change this to false to see the rejected state

        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000); // Simulates a 2-second network request
});

// Handling the promise
fetchData
    .then((message) => {
        console.log(message); // This runs if the promise is resolved
    })
    .catch((error) => {
        console.log(error); // This runs if the promise is rejected
    });
