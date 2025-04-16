// Example 1: Using forEach()
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(`Number: ${number}`);
});

// Example 2: Using map()
const squaredNumbers = numbers.map((number) => number * number);
console.log('Squared Numbers:', squaredNumbers);

// Example 3: Using filter()
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// Example 4: Using reduce()
const sum = numbers.reduce((total, number) => total + number, 0);
console.log('Sum of Numbers:', sum);

// Example 5: Using some()
const hasNegative = numbers.some((number) => number < 0);
console.log('Contains Negative Numbers:', hasNegative);

// Example 6: Using every()
const allPositive = numbers.every((number) => number > 0);
console.log('All Numbers Are Positive:', allPositive);

// Example 7: Using find()
const firstEven = numbers.find((number) => number % 2 === 0);
console.log('First Even Number:', firstEven);

// Example 8: Using findIndex()
const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log('Index of First Even Number:', firstEvenIndex);