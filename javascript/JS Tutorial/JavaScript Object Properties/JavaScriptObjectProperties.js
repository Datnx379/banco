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

let age = person.age; //Accessing JavaScript Properties
delete person.age; //delete 
person.nationality = "English"; //add