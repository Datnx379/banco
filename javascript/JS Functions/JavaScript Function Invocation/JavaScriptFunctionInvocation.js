// JavaScript Function Invocation Examples

// 1. Function Invocation as a Function
function greet() {
    console.log("Hello, World!");
}
greet(); // Invoked as a function

// 2. Function Invocation as a Method
const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
};
person.greet(); // Invoked as a method

// 3. Function Invocation with call()
function introduce(age) {
    console.log(`My name is ${this.name} and I am ${age} years old.`);
}
const user = { name: "Bob" };
introduce.call(user, 25); // Invoked with call()

// 4. Function Invocation with apply()
introduce.apply(user, [30]); // Invoked with apply()

// 5. Function Invocation with bind()
const boundFunction = introduce.bind(user, 35);
boundFunction(); // Invoked with bind()

// 6. Constructor Invocation
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const newPerson = new Person("Charlie", 40);
console.log(newPerson.name, newPerson.age); // Invoked as a constructor