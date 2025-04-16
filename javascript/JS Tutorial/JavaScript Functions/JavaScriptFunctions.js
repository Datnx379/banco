// JavaScript Functions

// Example of a simple function
function greet(name) {
    return `Hello, ${name}!`;
}

// Example of a function with default parameters
function addNumbers(a, b = 0) {
    return a + b;
}

// Example of an arrow function
const multiply = (x, y) => x * y;

// Example of a function that uses rest parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example of a function that uses a callback
function processArray(arr, callback) {
    return arr.map(callback);
}

// Example usage
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(addNumbers(5, 10)); // Output: 15
console.log(addNumbers(7)); // Output: 7
console.log(multiply(4, 3)); // Output: 12
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(processArray([1, 2, 3], num => num * 2)); // Output: [2, 4, 6]