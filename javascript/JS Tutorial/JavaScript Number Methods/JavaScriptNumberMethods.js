// JavaScript Number Methods Examples

// toString() - Converts a number to a string
let num = 123;
console.log(num.toString()); // Output: "123"

// toFixed() - Formats a number with a fixed number of decimals
let pi = 3.14159;
console.log(pi.toFixed(2)); // Output: "3.14"

// toExponential() - Converts a number to exponential notation
let largeNum = 123456;
console.log(largeNum.toExponential(2)); // Output: "1.23e+5"

// toPrecision() - Formats a number to a specified length
let preciseNum = 123.456;
console.log(preciseNum.toPrecision(4)); // Output: "123.5"

// valueOf() - Returns the primitive value of a number
let numObj = new Number(456);
console.log(numObj.valueOf()); // Output: 456

// isNaN() - Checks if a value is NaN
console.log(isNaN("hello")); // Output: true
console.log(isNaN(123)); // Output: false

// isFinite() - Checks if a value is a finite number
console.log(isFinite(123)); // Output: true
console.log(isFinite(Infinity)); // Output: false

// parseInt() - Parses a string and returns an integer
console.log(parseInt("123.45")); // Output: 123

// parseFloat() - Parses a string and returns a floating-point number
console.log(parseFloat("123.45")); // Output: 123.45

// Number() - Converts a value to a number
console.log(Number("123")); // Output: 123
console.log(Number("123.45")); // Output: 123.45
console.log(Number("hello")); // Output: NaN