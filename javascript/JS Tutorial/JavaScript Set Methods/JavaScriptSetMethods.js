const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate values are ignored

console.log("Set after adding values:", mySet);

// Check if a value exists in the Set
console.log("Does the Set contain 2?", mySet.has(2));
console.log("Does the Set contain 5?", mySet.has(5));

// Remove a value from the Set
mySet.delete(2);
console.log("Set after deleting 2:", mySet);

// Get the size of the Set
console.log("Size of the Set:", mySet.size);

// Iterate through the Set
console.log("Iterating through the Set:");
mySet.forEach(value => {
    console.log(value);
});

// Clear all values from the Set
mySet.clear();
console.log("Set after clearing all values:", mySet);