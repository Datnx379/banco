const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Create a date object using a specific date string
const specificDate = new Date("2023-10-01");
console.log("Specific Date (YYYY-MM-DD):", specificDate);

// Create a date object using year, month, day, hours, minutes, seconds, milliseconds
const detailedDate = new Date(2023, 9, 1, 10, 30, 0, 0); // Month is 0-indexed (9 = October)
console.log("Detailed Date:", detailedDate);

// ISO 8601 format
const isoDate = new Date("2023-10-01T10:30:00Z");
console.log("ISO 8601 Date:", isoDate);

// Short date format (MM/DD/YYYY)
const shortDate = new Date("10/01/2023");
console.log("Short Date (MM/DD/YYYY):", shortDate);

// Long date format
const longDate = new Date("October 1, 2023");
console.log("Long Date (Month DD, YYYY):", longDate);

// Display date in different formats
console.log("toDateString():", currentDate.toDateString());
console.log("toTimeString():", currentDate.toTimeString());
console.log("toLocaleDateString():", currentDate.toLocaleDateString());
console.log("toLocaleTimeString():", currentDate.toLocaleTimeString());
console.log("toISOString():", currentDate.toISOString());
console.log("toUTCString():", currentDate.toUTCString());