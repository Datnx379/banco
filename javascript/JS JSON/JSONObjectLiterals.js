// JSON Object Literals Example

// Defining a JSON object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person.hobbies[1]); // Output: traveling
console.log(person.address.city); // Output: New York

// Calling a method
console.log(person.greet()); // Output: Hello, my name is John Doe.