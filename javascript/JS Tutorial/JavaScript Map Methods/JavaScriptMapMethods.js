const myMap = new Map();

// Set key-value pairs
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Get a value by key
console.log(myMap.get('name')); // Output: John

// Check if a key exists
console.log(myMap.has('age')); // Output: true

// Get the size of the Map
console.log(myMap.size); // Output: 3

// Delete a key-value pair
myMap.delete('city');
console.log(myMap.has('city')); // Output: false

// Iterate over the Map
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Convert Map to an Array
const mapArray = Array.from(myMap);
console.log(mapArray); // Output: [['name', 'John'], ['age', 30]]

// Clear all entries in the Map
myMap.clear();
console.log(myMap.size); // Output: 0