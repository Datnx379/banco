// 1. Use 'const' and 'let' instead of 'var'
const MAX_USERS = 100;
let currentUsers = 0;

// 2. Use strict equality (===) to avoid type coercion issues
if (currentUsers === MAX_USERS) {
    console.log('Maximum users reached.');
}

// 3. Use arrow functions for concise syntax
const add = (a, b) => a + b;

// 4. Use template literals for string concatenation
const userMessage = `Current users: ${currentUsers}`;
console.log(userMessage);

// 5. Avoid global variables by using modules or closures
(() => {
    const privateVariable = 'This is private';
    console.log(privateVariable);
})();

// 6. Use default parameters for functions
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet();

// 7. Avoid using magic numbers; use constants instead
const SECONDS_IN_A_MINUTE = 60;
const minutesToSeconds = (minutes) => minutes * SECONDS_IN_A_MINUTE;

// 8. Use try-catch for error handling
try {
    const result = JSON.parse('invalid JSON');
} catch (error) {
    console.error('Error parsing JSON:', error.message);
}

// 9. Use meaningful variable and function names
function calculateTotalPrice(price, taxRate) {
    return price + price * taxRate;
}

// 10. Keep your code DRY (Don't Repeat Yourself)
function logMessage(message) {
    console.log(`[LOG]: ${message}`);
}
logMessage('This is a reusable logging function.');