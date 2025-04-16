import { greet } from './export.js';

// Exporting a function from a module (export.js)
export function greet(name) {
    return `Hello, ${name}!`;
}

// Importing and using the function in another file (main.js)

const message = greet('World');
console.log(message);