// Constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Adding a method to the prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

// Adding a property to the prototype
Person.prototype.greeting = "Hello";

// Creating objects
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

// Accessing prototype methods and properties
console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith
console.log(person1.greeting);     // Output: Hello
console.log(person2.greeting);     // Output: Hello

// Modifying the prototype property
Person.prototype.greeting = "Hi there";

console.log(person1.greeting);     // Output: Hi there
console.log(person2.greeting);     // Output: Hi there