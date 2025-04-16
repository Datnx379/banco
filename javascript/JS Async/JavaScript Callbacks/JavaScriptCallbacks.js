// Example of JavaScript Callbacks

function processUserInput(callback) {
    const name = prompt("Please enter your name:");
    callback(name);
}

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

// Using the callback
processUserInput(greetUser);