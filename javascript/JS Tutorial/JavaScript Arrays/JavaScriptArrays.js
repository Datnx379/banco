const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Adding elements
fruits.push("Orange"); // Adds to the end
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing elements
fruits.pop(); // Removes the last element
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating through an array
fruits.forEach((fruit) => {
    console.log(fruit);
});

// Finding an element
const index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Removing an element by index
fruits.splice(index, 1); // Removes "Banana"
console.log(fruits); // Output: ["Apple", "Cherry"]

// Checking the length of an array
console.log(fruits.length); // Output: 2

// Combining arrays
const vegetables = ["Carrot", "Potato"];
const food = fruits.concat(vegetables);
console.log(food); // Output: ["Apple", "Cherry", "Carrot", "Potato"]