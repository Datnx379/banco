// 1. forEach - Iterates over each element in an array
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

// 2. map - Creates a new array by applying a function to each element
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 3. filter - Creates a new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 4. reduce - Reduces the array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// 5. find - Returns the first element that satisfies a condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

// 6. findIndex - Returns the index of the first element that satisfies a condition
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);

// 7. some - Checks if at least one element satisfies a condition
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);

// 8. every - Checks if all elements satisfy a condition
const allPositive = numbers.every(num => num > 0);
console.log(allPositive);

// 9. sort - Sorts the elements of an array
const unsortedArray = [3, 1, 4, 1, 5, 9];
const sortedArray = unsortedArray.sort((a, b) => a - b);
console.log(sortedArray);

// 10. concat - Merges two or more arrays
const moreNumbers = [6, 7, 8];
const combinedArray = numbers.concat(moreNumbers);
console.log(combinedArray);

// 11. slice - Returns a shallow copy of a portion of an array
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray);

// 12. splice - Adds or removes elements from an array
const splicedArray = [...numbers]; // Copy to avoid mutation
splicedArray.splice(2, 1, 99); // Removes 1 element at index 2 and adds 99
console.log(splicedArray);

// 13. includes - Checks if an array contains a certain value
const hasThree = numbers.includes(3);
console.log(hasThree);

// 14. indexOf - Returns the first index of a specified value
const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);

// 15. join - Joins all elements into a string
const joinedString = numbers.join('-');
console.log(joinedString);