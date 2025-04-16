// Example of JavaScript Function call()

function greet(message) {
    console.log(`${message}, ${this.name}!`);
}

const person = {
    name: "Alice"
};

// Using call() to invoke the function with a specific 'this' value
greet.call(person, "Hello"); // Output: Hello, Alice!