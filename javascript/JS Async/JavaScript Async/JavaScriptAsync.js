// JavaScript Async Example

// Simulating an asynchronous operation using setTimeout
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        console.log("Data fetched.");
        callback(data);
    }, 2000);
}

// Using the callback to handle the fetched data
fetchData((data) => {
    console.log("Received data:", data);
});

// Example of a Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data with Promise...");
        setTimeout(() => {
            const data = { id: 2, name: "Promise Data" };
            resolve(data);
        }, 2000);
    });
}

// Handling the Promise
fetchDataWithPromise()
    .then((data) => {
        console.log("Received data from Promise:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Example of async/await
async function fetchDataAsync() {
    console.log("Fetching data with async/await...");
    const data = await fetchDataWithPromise();
    console.log("Received data with async/await:", data);
}

fetchDataAsync();