const currentDate = new Date();

// Get the full year
const year = currentDate.getFullYear();
console.log("Year:", year);

// Get the month (0-11, where 0 is January and 11 is December)
const month = currentDate.getMonth();
console.log("Month:", month + 1); // Adding 1 to display as 1-12

// Get the day of the month (1-31)
const date = currentDate.getDate();
console.log("Date:", date);

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
const day = currentDate.getDay();
console.log("Day of the Week:", day);

// Get the hours (0-23)
const hours = currentDate.getHours();
console.log("Hours:", hours);

// Get the minutes (0-59)
const minutes = currentDate.getMinutes();
console.log("Minutes:", minutes);

// Get the seconds (0-59)
const seconds = currentDate.getSeconds();
console.log("Seconds:", seconds);

// Get the milliseconds (0-999)
const milliseconds = currentDate.getMilliseconds();
console.log("Milliseconds:", milliseconds);

// Get the time in milliseconds since January 1, 1970
const time = currentDate.getTime();
console.log("Time in Milliseconds since Epoch:", time);

// Display the full date as a string
const dateString = currentDate.toString();
console.log("Date String:", dateString);