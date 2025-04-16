// Math.PI - Returns the value of PI
console.log("Value of PI:", Math.PI);

// Math.round() - Rounds a number to the nearest integer
console.log("Round 4.7:", Math.round(4.7));
console.log("Round 4.4:", Math.round(4.4));

// Math.ceil() - Rounds a number up to the next largest integer
console.log("Ceil 4.1:", Math.ceil(4.1));

// Math.floor() - Rounds a number down to the largest integer less than or equal to it
console.log("Floor 4.9:", Math.floor(4.9));

// Math.sqrt() - Returns the square root of a number
console.log("Square root of 16:", Math.sqrt(16));

// Math.abs() - Returns the absolute value of a number
console.log("Absolute value of -7:", Math.abs(-7));

// Math.pow() - Returns the base to the exponent power
console.log("2 to the power of 3:", Math.pow(2, 3));

// Math.max() - Returns the largest of zero or more numbers
console.log("Max of (5, 10, 15):", Math.max(5, 10, 15));

// Math.min() - Returns the smallest of zero or more numbers
console.log("Min of (5, 10, 15):", Math.min(5, 10, 15));

// Math.random() - Returns a pseudo-random number between 0 and 1
console.log("Random number:", Math.random());

// Generate a random integer between two values
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random integer between 1 and 10:", getRandomInt(1, 10));