let a = 10;
let b = 20;

console.log(a == b);  // Equal to
console.log(a === b); // Strict equal to
console.log(a != b);  // Not equal to
console.log(a !== b); // Strict not equal to
console.log(a > b);   // Greater than
console.log(a < b);   // Less than
console.log(a >= b);  // Greater than or equal to
console.log(a <= b);  // Less than or equal to

// Logical Operators
let x = true;
let y = false;

console.log(x && y);  // Logical AND
console.log(x || y);  // Logical OR
console.log(!x);      // Logical NOT

// Combining Comparison and Logical Operators
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}