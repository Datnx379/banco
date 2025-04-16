// Generate a random number between 0 (inclusive) and 1 (exclusive)
const randomNumber = Math.random();
console.log("Random number between 0 and 1:", randomNumber);

// Generate a random number between a specified range (min and max)
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const randomInRange = getRandomInRange(10, 20);
console.log("Random number between 10 and 20:", randomInRange);

// Generate a random integer between a specified range (min and max)
function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntInRange = getRandomIntInRange(1, 100);
console.log("Random integer between 1 and 100:", randomIntInRange);