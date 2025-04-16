for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at", i);
        break; // Exit the loop when i is 5
    }
    console.log("i =", i);
}

// Example of Continue Statement
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {
        continue; // Skip the rest of the loop for even numbers
    }
    console.log("j =", j);
}