// Example of JavaScript Closures

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// Explanation:
// A closure is created when the inner function retains access to the variables
// of the outer function even after the outer function has finished executing.