// Example of JavaScript Promises

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Consuming the Promise
myPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Promise processing complete.");
    });