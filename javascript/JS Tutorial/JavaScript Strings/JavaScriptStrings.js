// JavaScript Strings Examples

// Creating strings
const singleQuoteString = 'This is a string with single quotes.';
const doubleQuoteString = "This is a string with double quotes.";
const templateLiteralString = `This is a string with template literals.`;

// String concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// String interpolation
const age = 25;
const greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(greeting);

// String methods
const sampleString = "  JavaScript Strings Example  ";
console.log("Length:", sampleString.length);
console.log("Uppercase:", sampleString.toUpperCase());
console.log("Lowercase:", sampleString.toLowerCase());
console.log("Trimmed:", sampleString.trim());
console.log("Substring:", sampleString.substring(2, 11));
console.log("Replaced:", sampleString.replace("Strings", "Text"));

// Splitting a string
const csv = "apple,banana,orange";
const fruits = csv.split(",");
console.log("Fruits Array:", fruits);

// Checking if a string contains a substring
const containsExample = sampleString.includes("Strings");
console.log("Contains 'Strings':", containsExample);

// Accessing characters
console.log("First Character:", sampleString[0]);
console.log("Last Character:", sampleString[sampleString.length - 1]);