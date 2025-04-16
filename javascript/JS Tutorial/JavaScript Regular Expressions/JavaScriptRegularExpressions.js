// Example 1: Test for a pattern in a string
const regex1 = /hello/;
const str1 = "hello world";
console.log(regex1.test(str1)); // Output: true

// Example 2: Match a pattern in a string
const regex2 = /world/;
const str2 = "hello world";
console.log(str2.match(regex2)); // Output: [ 'world', index: 6, input: 'hello world', groups: undefined ]

// Example 3: Replace a pattern in a string
const regex3 = /world/;
const str3 = "hello world";
const newStr = str3.replace(regex3, "JavaScript");
console.log(newStr); // Output: hello JavaScript

// Example 4: Case-insensitive matching
const regex4 = /hello/i;
const str4 = "Hello World";
console.log(regex4.test(str4)); // Output: true

// Example 5: Global matching
const regex5 = /o/g;
const str5 = "hello world";
console.log(str5.match(regex5)); // Output: [ 'o', 'o' ]

// Example 6: Using special characters
const regex6 = /\d+/; // Matches one or more digits
const str6 = "There are 123 apples";
console.log(str6.match(regex6)); // Output: [ '123', index: 10, input: 'There are 123 apples', groups: undefined ]

// Example 7: Using character sets
const regex7 = /[aeiou]/g; // Matches all vowels
const str7 = "hello world";
console.log(str7.match(regex7)); // Output: [ 'e', 'o', 'o' ]

// Example 8: Using quantifiers
const regex8 = /a{2,}/; // Matches 'a' repeated 2 or more times
const str8 = "I have aaaa apples";
console.log(regex8.test(str8)); // Output: true

// Example 9: Using anchors
const regex9 = /^hello/; // Matches 'hello' at the start of the string
const str9 = "hello world";
console.log(regex9.test(str9)); // Output: true

// Example 10: Escaping special characters
const regex10 = /\$100/; // Matches the literal string '$100'
const str10 = "The price is $100";
console.log(regex10.test(str10)); // Output: true