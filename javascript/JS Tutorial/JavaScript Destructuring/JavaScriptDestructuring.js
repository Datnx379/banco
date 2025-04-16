// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const { name, age, city } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// Nested Object Destructuring
const user = {
    id: 101,
    credentials: {
        username: "johndoe",
        password: "12345"
    }
};
const { credentials: { username, password } } = user;
console.log(username); // johndoe
console.log(password); // 12345

// Default Values
const [a = 10, b = 20] = [5];
console.log(a); // 5
console.log(b); // 20

// Function Parameter Destructuring
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet(person); // Hello, my name is John and I am 30 years old.