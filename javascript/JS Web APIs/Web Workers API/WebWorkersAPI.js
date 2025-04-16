// Check if the browser supports Web Workers
if (window.Worker) {
    // Create a new Web Worker
    const myWorker = new Worker('worker.js');

    // Send a message to the worker
    myWorker.postMessage('Hello, Worker!');

    // Listen for messages from the worker
    myWorker.onmessage = function (event) {
        console.log('Message from Worker:', event.data);
    };

    // Handle errors from the worker
    myWorker.onerror = function (error) {
        console.error('Worker Error:', error.message);
    };
} else {
    console.log('Web Workers are not supported in this browser.');
}