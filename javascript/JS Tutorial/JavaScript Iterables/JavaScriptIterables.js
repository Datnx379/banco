const fruits = ["Apple", "Banana", "Cherry"];

// Using a for...of loop to iterate over the array
for (const fruit of fruits) {
    console.log(fruit);
}

// A string is also an iterable
const message = "Hello";

// Using a for...of loop to iterate over the string
for (const char of message) {
    console.log(char);
}

// Custom iterable example
const customIterable = {
    items: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let index = 0;
        const items = this.items;
        return {
            next() {
                if (index < items.length) {
                    return { value: items[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

// Using a for...of loop to iterate over the custom iterable
for (const item of customIterable) {
    console.log(item);
}