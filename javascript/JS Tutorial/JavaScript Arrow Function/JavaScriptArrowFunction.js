const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// Arrow function with one parameter
const square = x => x * x;
console.log(square(4)); // Output: 16

// Arrow function with no parameters
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!

// Arrow function used with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]