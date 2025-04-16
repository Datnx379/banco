// Example of using JSON.parse()

// JSON string
const jsonString = '{"name": "John", "age": 30, "isStudent": false}';

// Parse JSON string into a JavaScript object
const jsonObject = JSON.parse(jsonString);

// Accessing properties of the parsed object
console.log(jsonObject.name); // Output: John
console.log(jsonObject.age);  // Output: 30
console.log(jsonObject.isStudent); // Output: false