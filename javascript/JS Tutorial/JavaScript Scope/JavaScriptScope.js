// Global Scope
let globalVariable = "I am a global variable";

function globalScopeExample() {
    console.log(globalVariable); // Accessible here
}

globalScopeExample();

// Function Scope
function functionScopeExample() {
    let functionScopedVariable = "I am a function-scoped variable";
    console.log(functionScopedVariable); // Accessible here
}

functionScopeExample();
// console.log(functionScopedVariable); // Uncaught ReferenceError: functionScopedVariable is not defined

// Block Scope
function blockScopeExample() {
    if (true) {
        let blockScopedVariable = "I am a block-scoped variable";
        console.log(blockScopedVariable); // Accessible here
    }
    // console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined
}

blockScopeExample();
