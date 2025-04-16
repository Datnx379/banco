const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Create a Date object for a specific date
const specificDate = new Date("2023-10-01");
console.log("Specific Date:", specificDate);

// Get individual components of a date
console.log("Year:", currentDate.getFullYear());
console.log("Month (0-based):", currentDate.getMonth());
console.log("Date:", currentDate.getDate());
console.log("Day of the Week:", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

// Set a specific date and time
const customDate = new Date();
customDate.setFullYear(2025);
customDate.setMonth(11); // December (0-based)
customDate.setDate(25);
customDate.setHours(10);
customDate.setMinutes(30);
console.log("Custom Date and Time:", customDate);

// Calculate the difference between two dates
const date1 = new Date("2023-01-01");
const date2 = new Date("2023-12-31");
const differenceInTime = date2 - date1; // Difference in milliseconds
const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);
console.log("Difference in Days:", differenceInDays);

// Format a date as a string
console.log("Locale Date String:", currentDate.toLocaleDateString());
console.log("Locale Time String:", currentDate.toLocaleTimeString());
console.log("ISO String:", currentDate.toISOString());