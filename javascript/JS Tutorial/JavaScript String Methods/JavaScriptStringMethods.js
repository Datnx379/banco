// 1. length - Get the length of a string
const str = "Hello, World!";
console.log("Length:", str.length); // Output: 13

// 2. toUpperCase() - Convert string to uppercase
console.log("Uppercase:", str.toUpperCase()); // Output: "HELLO, WORLD!"

// 3. toLowerCase() - Convert string to lowercase
console.log("Lowercase:", str.toLowerCase()); // Output: "hello, world!"

// 4. includes() - Check if a string contains a substring
console.log("Includes 'World':", str.includes("World")); // Output: true

// 5. startsWith() - Check if a string starts with a specific substring
console.log("Starts with 'Hello':", str.startsWith("Hello")); // Output: true

// 6. endsWith() - Check if a string ends with a specific substring
console.log("Ends with '!':", str.endsWith("!")); // Output: true

// 7. indexOf() - Find the index of the first occurrence of a substring
console.log("Index of 'World':", str.indexOf("World")); // Output: 7

// 8. slice() - Extract a part of a string
console.log("Slice (7, 12):", str.slice(7, 12)); // Output: "World"

// 9. replace() - Replace a substring with another substring
console.log("Replace 'World' with 'JavaScript':", str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

// 10. split() - Split a string into an array
console.log("Split by ',':", str.split(",")); // Output: ["Hello", " World!"]

// 11. trim() - Remove whitespace from both ends of a string
const strWithSpaces = "   Hello, World!   ";
console.log("Trimmed:", strWithSpaces.trim()); // Output: "Hello, World!"

// 12. charAt() - Get a character at a specific index
console.log("Character at index 1:", str.charAt(1)); // Output: "e"

// 13. repeat() - Repeat a string a specified number of times
console.log("Repeat 3 times:", str.repeat(3)); // Output: "Hello, World!Hello, World!Hello, World!"

// 14. substring() - Extract characters between two indices
console.log("Substring (7, 12):", str.substring(7, 12)); // Output: "World"

// 15. concat() - Concatenate strings
const str2 = " How are you?";
console.log("Concatenated string:", str.concat(str2)); // Output: "Hello, World! How are you?"