/**
 * JavaScript Numbers
 * Demonstrates various operations and properties of numbers in JavaScript.
 */

// Declaring numbers
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number

// Basic arithmetic operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % 5;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Special number values
console.log("Infinity:", Infinity);
console.log("Negative Infinity:", -Infinity);
console.log("NaN (Not a Number):", NaN);

// Number methods
let num3 = 123.456;
console.log("toFixed(2):", num3.toFixed(2)); // Rounds to 2 decimal places
console.log("toPrecision(4):", num3.toPrecision(4)); // Formats to 4 significant digits

// Parsing strings to numbers
let str1 = "100";
let str2 = "3.14";
console.log("parseInt:", parseInt(str1)); // Converts to integer
console.log("parseFloat:", parseFloat(str2)); // Converts to floating-point number

// Checking if a value is a number
console.log("isNaN('hello'):", isNaN("hello")); // true
console.log("isNaN(123):", isNaN(123)); // false

// Working with large numbers
let bigNum = 1e6; // 1 million
console.log("Large number (1e6):", bigNum);

// Using Math object
console.log("Math.PI:", Math.PI);
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.random():", Math.random()); // Random number between 0 and 1
console.log("Math.round(4.7):", Math.round(4.7));
console.log("Math.floor(4.7):", Math.floor(4.7));
console.log("Math.ceil(4.3):", Math.ceil(4.3));