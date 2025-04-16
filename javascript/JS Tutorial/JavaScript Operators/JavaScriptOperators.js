/**
 * JavaScript Operators
 */

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);       // Addition
console.log("Subtraction:", a - b);    // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b);       // Division
console.log("Modulus:", a % b);        // Modulus
console.log("Exponentiation:", a ** b); // Exponentiation

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log("x after += 5:", x);

// Comparison Operators
console.log("Equal:", a == b);         // Equal
console.log("Not Equal:", a != b);     // Not Equal
console.log("Strict Equal:", a === b); // Strict Equal
console.log("Greater than:", a > b);   // Greater than
console.log("Less than:", a < b);      // Less than

// Logical Operators
console.log("AND:", a > 5 && b < 10);  // AND
console.log("OR:", a > 5 || b > 10);   // OR
console.log("NOT:", !(a > b));         // NOT

// Bitwise Operators
console.log("Bitwise AND:", a & b);    // Bitwise AND
console.log("Bitwise OR:", a | b);     // Bitwise OR
console.log("Bitwise XOR:", a ^ b);    // Bitwise XOR

// Ternary Operator
let result = a > b ? "a is greater" : "b is greater";
console.log("Ternary Result:", result);