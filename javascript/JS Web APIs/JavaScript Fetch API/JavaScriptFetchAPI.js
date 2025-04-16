// Example of using the Fetch API to make a GET request

// URL to fetch data from
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        console.log('Fetched Data:', data); // Log the fetched data
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Handle errors
    });