function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Example usage:
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.fullName()); // Output: John Doe
console.log(person2.fullName()); // Output: Jane Smith