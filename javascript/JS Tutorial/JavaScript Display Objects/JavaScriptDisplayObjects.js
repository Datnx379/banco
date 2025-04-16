// Example object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "sports"]
};

// Display the object in the console
console.log(person);

// Convert the object to a string and display it
console.log(JSON.stringify(person, null, 2));

// Access and display specific properties
console.log(`Name: ${person.firstName} ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Hobbies: ${person.hobbies.join(", ")}`);