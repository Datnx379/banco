/**
 * JavaScript Template Strings Example
 */

// Using template literals for string interpolation
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Multiline strings with template literals
const multilineString = `This is a string
that spans across
multiple lines.`;
console.log(multilineString);

// Embedding expressions in template literals
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<strong>${values[i] || ''}</strong>`, '');
}

const highlighted = highlight`This is a ${'tagged'} template literal example.`;
console.log(highlighted);