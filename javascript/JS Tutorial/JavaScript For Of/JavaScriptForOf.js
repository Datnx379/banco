const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
    console.log(fruit);
}

// Iterating over a string
const message = 'Hello';
for (const char of message) {
    console.log(char);
}

// Iterating over a Map
const map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Iterating over a Set
const set = new Set([1, 2, 3, 4, 5]);
for (const number of set) {
    console.log(number);
}