// JavaScript BigInt Example

// Creating BigInt values
const bigInt1 = 1234567890123456789012345678901234567890n; // Using 'n' at the end
const bigInt2 = BigInt("1234567890123456789012345678901234567890"); // Using BigInt constructor

// Basic arithmetic operations with BigInt
const sum = bigInt1 + bigInt2;
const difference = bigInt1 - bigInt2;
const product = bigInt1 * bigInt2;
const quotient = bigInt1 / bigInt2; // Division truncates the decimal part
const remainder = bigInt1 % bigInt2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Comparing BigInt values
console.log("bigInt1 > bigInt2:", bigInt1 > bigInt2);
console.log("bigInt1 === bigInt2:", bigInt1 === bigInt2); // Strict equality
console.log("bigInt1 == bigInt2:", bigInt1 == bigInt2); // Loose equality

// Mixing BigInt and Number types (throws an error)
try {
    const invalidOperation = bigInt1 + 10; // Cannot mix BigInt and Number
} catch (error) {
    console.error("Error:", error.message);
}

// Converting between BigInt and Number
const bigIntToNumber = Number(bigInt1); // May lose precision if BigInt is too large
const numberToBigInt = BigInt(42);

console.log("BigInt to Number:", bigIntToNumber);
console.log("Number to BigInt:", numberToBigInt);