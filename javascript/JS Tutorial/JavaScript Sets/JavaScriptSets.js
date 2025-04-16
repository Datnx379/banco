const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Duplicate values are ignored

console.log(mySet); // Output: Set(3) { 1, 2, 3 }

// Check if a value exists in the Set
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

// Remove a value from the Set
mySet.delete(2);
console.log(mySet); // Output: Set(2) { 1, 3 }

// Get the size of the Set
console.log(mySet.size); // Output: 2

// Iterate through the Set
mySet.forEach(value => {
    console.log(value);
});

// Clear all values from the Set
mySet.clear();
console.log(mySet); // Output: Set(0) {}