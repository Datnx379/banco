console.log(typeof 42); // "number"
console.log(typeof 'Hello, world!'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof { name: 'Alice', age: 25 }); // "object"
console.log(typeof [1, 2, 3]); // "object" (arrays are a type of object)
console.log(typeof function () {}); // "function"

// Checking variables
let myVar;
console.log(typeof myVar); // "undefined"

myVar = 100;
console.log(typeof myVar); // "number"

myVar = 'JavaScript';
console.log(typeof myVar); // "string"

myVar = null;
console.log(typeof myVar); // "object"

// Using typeof with symbols and BigInt
console.log(typeof Symbol('symbol')); // "symbol"
console.log(typeof 123n); // "bigint"