// 1. Using Assignment (=) Instead of Equality (== or ===)
let x = 10;
if (x = 5) { // Mistake: Assignment instead of comparison
    console.log("This will always run because x is assigned 5.");
}

// Correct:
if (x === 5) {
    console.log("This will run only if x equals 5.");
}

// 2. Missing `var`, `let`, or `const` to Declare Variables
function example() {
    y = 10; // Mistake: y becomes a global variable
    console.log(y);
}

// Correct:
function exampleCorrect() {
    let y = 10; // Declare with let, const, or var
    console.log(y);
}

// 3. Incorrect Usage of `this`
const obj = {
    name: "JavaScript",
    getName: function () {
        return this.name;
    }
};

const getName = obj.getName;
console.log(getName()); // Mistake: `this` is undefined or refers to the global object

// Correct:
const boundGetName = obj.getName.bind(obj);
console.log(boundGetName());

// 4. Forgetting to Break in a Switch Statement
const fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana": // Mistake: No break, so this case will also execute
        console.log("Banana selected");
        break;
}

// Correct:
switch (fruit) {
    case "apple":
        console.log("Apple selected");
        break;
    case "banana":
        console.log("Banana selected");
        break;
}

// 5. Using `==` Instead of `===`
console.log(0 == false); // true, but can lead to unexpected results
console.log(0 === false); // false, as types are also compared

// 6. Modifying Objects While Iterating
const numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2) {
        numbers.splice(i, 1); // Mistake: Modifying array during iteration
    }
}
console.log(numbers);

// Correct:
const filteredNumbers = numbers.filter(num => num !== 2);
console.log(filteredNumbers);

// 7. Not Using `catch` with Promises
fetch("https://example.com/api")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error)); // Always handle errors