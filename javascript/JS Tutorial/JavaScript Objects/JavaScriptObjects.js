/**
 * JavaScript Objects Example
 */

// Creating an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "traveling", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Accessing nested object properties
console.log(person.address.city); // Output: New York

// Calling a method
console.log(person.fullName()); // Output: John Doe

// Adding a new property
person.phoneNumber = "123-456-7890";
console.log(person.phoneNumber); // Output: 123-456-7890

// Deleting a property
delete person.age;
console.log(person.age); // Output: undefined