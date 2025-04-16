class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person's details
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    // Static method
    static greet() {
        return "Hello!";
    }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 25);
console.log(person1.displayInfo()); // Output: Name: Alice, Age: 25

// Calling the static method
console.log(Person.greet()); // Output: Hello!