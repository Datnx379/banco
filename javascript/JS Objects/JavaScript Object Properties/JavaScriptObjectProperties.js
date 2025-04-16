// Defining an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer"
};

// Using Object.defineProperty to add a new property
Object.defineProperty(person, "country", {
    value: "USA",
    writable: false, // Makes the property read-only
    enumerable: true, // Makes the property show up in loops
    configurable: true // Allows the property to be deleted or redefined
});

console.log(person.country); // Output: USA

// Attempting to modify the read-only property
person.country = "Canada";
console.log(person.country); // Output: USA (modification fails)

// Using Object.defineProperty to modify an existing property
Object.defineProperty(person, "age", {
    writable: false // Makes the property read-only
});

console.log(person.age); // Output: 30

// Attempting to modify the read-only property
person.age = 35;
console.log(person.age); // Output: 30 (modification fails)

// Looping through properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Checking if a property exists
console.log("country" in person); // Output: true
console.log("job" in person); // Output: true

// Accessing a property descriptor
console.log(Object.getOwnPropertyDescriptor(person, "country"));

// Accessing all property descriptors
console.log(Object.getOwnPropertyDescriptors(person));

// Listing all property names
console.log(Object.getOwnPropertyNames(person));

// Accessing the prototype of the object
console.log(Object.getPrototypeOf(person));