// AND operator (&)
function bitwiseAnd(a, b) {
    return a & b;
}

// OR operator (|)
function bitwiseOr(a, b) {
    return a | b;
}

// XOR operator (^)
function bitwiseXor(a, b) {
    return a ^ b;
}

// NOT operator (~)
function bitwiseNot(a) {
    return ~a;
}

// Left shift (<<)
function leftShift(a, n) {
    return a << n;
}

// Right shift (>>)
function rightShift(a, n) {
    return a >> n;
}

// Zero-fill right shift (>>>)
function zeroFillRightShift(a, n) {
    return a >>> n;
}

// Example usage
console.log("Bitwise AND (5 & 3):", bitwiseAnd(5, 3)); // Output: 1
console.log("Bitwise OR (5 | 3):", bitwiseOr(5, 3));   // Output: 7
console.log("Bitwise XOR (5 ^ 3):", bitwiseXor(5, 3)); // Output: 6
console.log("Bitwise NOT (~5):", bitwiseNot(5));       // Output: -6
console.log("Left Shift (5 << 1):", leftShift(5, 1));  // Output: 10
console.log("Right Shift (5 >> 1):", rightShift(5, 1));// Output: 2
console.log("Zero-fill Right Shift (5 >>> 1):", zeroFillRightShift(5, 1)); // Output: 2