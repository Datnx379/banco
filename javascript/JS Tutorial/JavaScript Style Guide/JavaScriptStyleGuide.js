// 1. Use 'const' and 'let' instead of 'var'
const MAX_USERS = 100;
let currentUserCount = 0;

// 2. Use meaningful variable and function names
function addUser(name) {
    if (currentUserCount < MAX_USERS) {
        console.log(`Adding user: ${name}`);
        currentUserCount++;
    } else {
        console.log('User limit reached.');
    }
}

// 3. Use arrow functions for concise function expressions
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};

// 4. Use template literals for string concatenation
const getWelcomeMessage = (name) => `Welcome, ${name}!`;

// 5. Use strict equality (===) instead of loose equality (==)
function isAdult(age) {
    return age === 18;
}

// 6. Use default parameters in functions
function createUser(name = 'Guest') {
    return { name, id: Date.now() };
}

// 7. Use destructuring for objects and arrays
const user = { name: 'Alice', age: 25 };
const { name, age } = user;

// 8. Use spread/rest operators for cleaner code
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// 9. Use consistent indentation and spacing
if (currentUserCount > 0) {
    console.log('There are users in the system.');
}

// 10. Avoid deeply nested code by using early returns
function processUser(user) {
    if (!user) {
        console.log('No user provided.');
        return;
    }
    console.log(`Processing user: ${user.name}`);
}

// Example usage
addUser('John');
greetUser('John');
console.log(getWelcomeMessage('John'));
console.log(isAdult(18));
console.log(createUser());
console.log(moreNumbers);
processUser(user);