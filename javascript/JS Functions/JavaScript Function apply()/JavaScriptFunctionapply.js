// Example of using the apply() method in JavaScript

const person = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

// Using apply() to call the function with a specific 'this' value and arguments as an array
const result = person.fullName.apply(person1, ["New York", "USA"]);

console.log(result); // Output: John Doe from New York, USA