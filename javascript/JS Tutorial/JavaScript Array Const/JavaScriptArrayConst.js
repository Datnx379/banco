const fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Modifying elements
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Adding elements
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Orange"]

// Note: You cannot reassign the entire array when using const
// Example: fruits = ["Mango", "Pineapple"]; // This will throw an error