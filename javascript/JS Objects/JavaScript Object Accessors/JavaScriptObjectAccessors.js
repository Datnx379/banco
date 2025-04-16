// Define an object with accessor properties
const person = {
    firstName: "John",
    lastName: "Doe",
    
    // Getter for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // Setter for fullName
    set fullName(name) {
        const parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// Using the getter
console.log(person.fullName); // Output: John Doe

// Using the setter
person.fullName = "Jane Smith";
console.log(person.firstName); // Output: Jane
console.log(person.lastName);  // Output: Smith