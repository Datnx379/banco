// Example of JavaScript Function Parameters

// Function with two parameters
function greet(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

// Calling the function with arguments
greet("Alice", 25);
greet("Bob", 30);

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

// Calling the function
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(7));    // Output: 7 (b defaults to 1)

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Calling the function
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(10, 20));     // Output: 30