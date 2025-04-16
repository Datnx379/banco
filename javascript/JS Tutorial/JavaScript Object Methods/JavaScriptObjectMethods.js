// JavaScript Object Methods Example

// Define an object with properties and methods
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    isAdult: function () {
        return this.age >= 18;
    }
};

// Accessing object methods
console.log("Full Name:", person.fullName()); // Output: John Doe
console.log("Is Adult:", person.isAdult());  // Output: true

// Adding a new method to the object
person.greet = function () {
    return `Hello, my name is ${this.fullName()}.`;
};

console.log(person.greet()); // Output: Hello, my name is John Doe.