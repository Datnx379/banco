/**
 * JavaScript DOM Selectors
 */

// Select an element by ID
const elementById = document.getElementById('exampleId');
console.log(elementById);

// Select elements by class name
const elementsByClassName = document.getElementsByClassName('exampleClass');
console.log(elementsByClassName);

// Select elements by tag name
const elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName);

// Select the first matching element using querySelector
const firstElement = document.querySelector('.exampleClass');
console.log(firstElement);

// Select all matching elements using querySelectorAll
const allElements = document.querySelectorAll('.exampleClass');
console.log(allElements);

/**
 * jQuery DOM Selectors
 */

// Select an element by ID
const $elementById = $('#exampleId');
console.log($elementById);

// Select elements by class name
const $elementsByClassName = $('.exampleClass');
console.log($elementsByClassName);

// Select elements by tag name
const $elementsByTagName = $('div');
console.log($elementsByTagName);

// Select the first matching element
const $firstElement = $('.exampleClass').first();
console.log($firstElement);

// Select all matching elements
const $allElements = $('.exampleClass');
console.log($allElements);