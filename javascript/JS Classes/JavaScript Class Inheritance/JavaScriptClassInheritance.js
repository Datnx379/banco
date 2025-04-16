class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Example usage
const animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a noise.

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // Output: Buddy barks.