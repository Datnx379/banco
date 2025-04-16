class Calculator {
    // Static method to add two numbers
    static add(a, b) {
        return a + b;
    }

    // Static method to subtract two numbers
    static subtract(a, b) {
        return a - b;
    }

    // Static method to multiply two numbers
    static multiply(a, b) {
        return a * b;
    }

    // Static method to divide two numbers
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Using static methods without creating an instance of the class
console.log(Calculator.add(10, 5));       // Output: 15
console.log(Calculator.subtract(10, 5));  // Output: 5
console.log(Calculator.multiply(10, 5));  // Output: 50
console.log(Calculator.divide(10, 5));    // Output: 2