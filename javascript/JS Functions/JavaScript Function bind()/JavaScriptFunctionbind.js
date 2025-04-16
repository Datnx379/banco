// Example of JavaScript Function bind()

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const member = {
    firstName: "Jane",
    lastName: "Smith"
};

// Using bind() to borrow the fullName method
const getFullName = person.fullName.bind(member);

console.log(getFullName()); // Output: Jane Smith