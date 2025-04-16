// JSON object as a string
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parsing JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John

// Modifying the object
jsonObject.age = 31;

// Converting JavaScript object back to JSON string
const updatedJsonString = JSON.stringify(jsonObject);
console.log(updatedJsonString); // Output: {"name":"John","age":31,"city":"New York"}