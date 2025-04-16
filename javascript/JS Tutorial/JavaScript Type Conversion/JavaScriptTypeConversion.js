// String to Number
let str = "123";
let num = Number(str);
console.log(num); // Output: 123

// Number to String
let number = 456;
let string = String(number);
console.log(string); // Output: "456"

// Boolean to String
let bool = true;
let boolToString = String(bool);
console.log(boolToString); // Output: "true"

// String to Boolean
let strBool = "true";
let booleanValue = (strBool === "true");
console.log(booleanValue); // Output: true

// Number to Boolean
let zero = 0;
let nonZero = 10;
console.log(Boolean(zero)); // Output: false
console.log(Boolean(nonZero)); // Output: true

// Implicit Type Conversion (Type Coercion)
console.log("5" + 2); // Output: "52" (string concatenation)
console.log("5" - 2); // Output: 3 (string converted to number)
console.log("5" * 2); // Output: 10 (string converted to number)
console.log("5" / 2); // Output: 2.5 (string converted to number)

// Explicit Type Conversion
let value = "123";
console.log(parseInt(value)); // Output: 123 (string to integer)
console.log(parseFloat(value)); // Output: 123 (string to float)
console.log(Number(value)); // Output: 123 (string to number)