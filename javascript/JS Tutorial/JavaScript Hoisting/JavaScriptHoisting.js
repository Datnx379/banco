// Variable hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// Function hoisting
hoistedFunction(); // Output: "I am a hoisted function"
function hoistedFunction() {
    console.log("I am a hoisted function");
}

// Let and const are not hoisted in the same way
try {
    console.log(notHoistedVar); // ReferenceError: Cannot access 'notHoistedVar' before initialization
} catch (error) {
    console.error(error.message);
}
let notHoistedVar = "I am not hoisted";

// Function expressions are not hoisted
try {
    notHoistedFunction(); // TypeError: notHoistedFunction is not a function
} catch (error) {
    console.error(error.message);
}
var notHoistedFunction = function () {
    console.log("I am not hoisted");
};