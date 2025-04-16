// Example of using JSON.stringify()

const person = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false,
    hobbies: ["reading", "traveling", "sports"]
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString);

// Output:
// {"name":"John","age":30,"city":"New York","isStudent":false,"hobbies":["reading","traveling","sports"]}

// Using JSON.stringify with optional parameters
const jsonStringWithIndentation = JSON.stringify(person, null, 4);
console.log(jsonStringWithIndentation);

// Output (formatted with indentation):
// {
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "isStudent": false,
//     "hobbies": [
//         "reading",
//         "traveling",
//         "sports"
//     ]
// }