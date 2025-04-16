// Example of using Web Storage API

// Storing data in localStorage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('isLoggedIn', 'true');

// Retrieving data from localStorage
const username = localStorage.getItem('username');
const isLoggedIn = localStorage.getItem('isLoggedIn');

console.log(`Username: ${username}`);
console.log(`Is Logged In: ${isLoggedIn}`);

// Removing data from localStorage
localStorage.removeItem('username');

// Clearing all data from localStorage
localStorage.clear();

// Storing data in sessionStorage
sessionStorage.setItem('sessionID', '12345');
sessionStorage.setItem('theme', 'dark');

// Retrieving data from sessionStorage
const sessionID = sessionStorage.getItem('sessionID');
const theme = sessionStorage.getItem('theme');

console.log(`Session ID: ${sessionID}`);
console.log(`Theme: ${theme}`);

// Removing data from sessionStorage
sessionStorage.removeItem('theme');

// Clearing all data from sessionStorage
sessionStorage.clear();