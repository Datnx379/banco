// Asynchronous JavaScript Example

// Simulating an asynchronous operation using setTimeout
console.log("Start");

setTimeout(() => {
    console.log("This is an asynchronous message");
}, 2000);

console.log("End");

// Example of a Promise
const fetchData = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
        setTimeout(() => resolve("Data fetched successfully!"), 3000);
    } else {
        reject("Failed to fetch data.");
    }
});

fetchData
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

// Example of async/await
async function fetchAsyncData() {
    try {
        const data = await fetchData;
        console.log("Async/Await:", data);
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}

fetchAsyncData();