const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    isAdult: function () {
        return this.age >= 18;
    }
};

// Example usage
console.log(person.fullName()); // Output: John Doe
console.log(person.isAdult());  // Output: true