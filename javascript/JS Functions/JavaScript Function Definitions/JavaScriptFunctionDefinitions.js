// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const subtract = function(a, b) {
    return a - b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Function with Default Parameters
function divide(a, b = 1) {
    return a / b;
}

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an IIFE");
})();