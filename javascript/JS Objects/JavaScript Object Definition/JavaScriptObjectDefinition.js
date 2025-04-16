// Using an Object Literal
const objLiteral = {
    name: "John",
    age: 30
};
console.log(objLiteral);

// Using the new Keyword
const objNew = new Object();
objNew.name = "Jane";
objNew.age = 25;
console.log(objNew);

// Using an Object Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const objConstructor = new Person("Alice", 28);
console.log(objConstructor);

// Using Object.assign()
const objAssign = Object.assign({}, { name: "Bob", age: 35 });
console.log(objAssign);

// Using Object.create()
const proto = { greet: function() { return `Hello, ${this.name}`; } };
const objCreate = Object.create(proto);
objCreate.name = "Charlie";
console.log(objCreate);
console.log(objCreate.greet());

// Using Object.fromEntries()
const entries = [["name", "Diana"], ["age", 40]];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);