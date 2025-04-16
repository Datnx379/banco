// JavaScript Object Protection Example

// Using Object.freeze() to make an object immutable
const immutableObject = Object.freeze({
    name: "John",
    age: 30
});

console.log("Before attempting modification:", immutableObject);

// Attempting to modify the frozen object (will fail silently in non-strict mode)
immutableObject.age = 35;
immutableObject.newProperty = "test";

console.log("After attempting modification:", immutableObject);

// Using Object.seal() to prevent adding or removing properties
const sealedObject = Object.seal({
    name: "Jane",
    age: 25
});

console.log("Before modification:", sealedObject);

// Modifying existing properties is allowed
sealedObject.age = 28;

// Adding or deleting properties is not allowed
delete sealedObject.name; // Will fail
sealedObject.newProperty = "test"; // Will fail

console.log("After modification:", sealedObject);

// Using Object.preventExtensions() to prevent adding new properties
const nonExtensibleObject = Object.preventExtensions({
    name: "Alice",
    age: 22
});

console.log("Before modification:", nonExtensibleObject);

// Modifying existing properties is allowed
nonExtensibleObject.age = 23;

// Adding new properties is not allowed
nonExtensibleObject.newProperty = "test"; // Will fail

console.log("After modification:", nonExtensibleObject);