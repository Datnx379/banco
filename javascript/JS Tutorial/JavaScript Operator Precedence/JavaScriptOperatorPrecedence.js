// Operator precedence determines the order in which operators are evaluated.
// Higher precedence operators are evaluated before lower precedence operators.

let result;

// Example 1: Multiplication (*) has higher precedence than Addition (+)
result = 10 + 5 * 2; // 5 * 2 is evaluated first, then 10 + 10
console.log("Example 1:", result); // Output: 20

// Example 2: Parentheses () have the highest precedence
result = (10 + 5) * 2; // 10 + 5 is evaluated first due to parentheses
console.log("Example 2:", result); // Output: 30

// Example 3: Division (/) and Multiplication (*) have the same precedence
// They are evaluated from left to right (associativity)
result = 20 / 5 * 2; // 20 / 5 is evaluated first, then * 2
console.log("Example 3:", result); // Output: 8

// Example 4: Assignment (=) has the lowest precedence
let a = 10;
let b = 5;
result = a + b * 2; // b * 2 is evaluated first, then a + (b * 2)
console.log("Example 4:", result); // Output: 20

// Example 5: Logical AND (&&) has higher precedence than Logical OR (||)
let x = true;
let y = false;
let z = true;
result = x || y && z; // y && z is evaluated first, then x || (y && z)
console.log("Example 5:", result); // Output: true

// Example 6: Combining multiple operators
result = (10 + 5) * 2 - 3 / (1 + 1); // Parentheses first, then *, /, +, -
console.log("Example 6:", result); // Output: 29.5