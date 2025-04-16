// Booleans represent one of two values: true or false
let isJavaScriptFun = true;
console.log("Is JavaScript fun? " + isJavaScriptFun); // Output: true

// Boolean values can also be the result of comparisons
let x = 10;
let y = 5;
console.log(x > y); // Output: true
console.log(x < y); // Output: false

// Boolean values in conditions
if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

// Using Boolean() to convert values to booleans
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("Hello")); // Output: true
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false

// Truthy and Falsy values
// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy
let truthyValue = "I am truthy";
let falsyValue = 0;

if (truthyValue) {
    console.log("This is a truthy value");
}

if (!falsyValue) {
    console.log("This is a falsy value");
}