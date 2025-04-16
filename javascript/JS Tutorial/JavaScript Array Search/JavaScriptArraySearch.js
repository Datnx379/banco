// JavaScript Array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

// /JavaScript Array lastIndexOf()
const fruitss = ["Apple", "Orange", "Apple", "Mango"];
let positions = fruits.lastIndexOf("Apple") + 1;

//JavaScript Array includes()
const fruitsz= ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

//JavaScript Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//JavaScript Array findIndex()
const numberz= [4, 9, 16, 25, 29];
let firstz = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//JavaScript Array findLast() Method
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

//JavaScript Array findLastIndex() Method
const temps = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);