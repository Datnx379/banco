// JavaScript String Search Examples

// Example 1: Using indexOf()
function searchWithIndexOf(text, searchString) {
    return text.indexOf(searchString) !== -1;
}

// Example 2: Using includes()
function searchWithIncludes(text, searchString) {
    return text.includes(searchString);
}

// Example 3: Using search() with Regular Expressions
function searchWithRegex(text, regex) {
    return text.search(regex) !== -1;
}

// Example 4: Using match() with Regular Expressions
function searchWithMatch(text, regex) {
    return text.match(regex) !== null;
}

// Example Usage
const text = "JavaScript is a versatile programming language.";
console.log(searchWithIndexOf(text, "versatile")); // true
console.log(searchWithIncludes(text, "programming")); // true
console.log(searchWithRegex(text, /language/)); // true
console.log(searchWithMatch(text, /JavaScript/)); // true