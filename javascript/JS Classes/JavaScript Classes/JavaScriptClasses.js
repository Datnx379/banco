// Example of a JavaScript Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person details
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating an instance of the Person class
const person1 = new Person("John Doe", 30);
person1.displayInfo();