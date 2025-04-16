const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Developer"
};

// Using "for...in" to iterate over the properties of the object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Example with an array
const colors = ["red", "green", "blue"];

for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}