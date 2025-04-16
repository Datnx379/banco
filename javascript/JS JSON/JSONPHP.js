// Example of working with JSON and PHP

// Sample JSON data
const jsonData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
};

// Convert JSON object to string for sending to PHP
const jsonString = JSON.stringify(jsonData);

// Example: Sending JSON data to a PHP server using Fetch API
fetch('process.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: jsonString
})
    .then(response => response.json())
    .then(data => {
        console.log('Response from PHP:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });