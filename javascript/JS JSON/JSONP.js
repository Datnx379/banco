// Define a callback function
function handleResponse(data) {
    console.log("JSONP Response:", data);
}

// Dynamically create a script tag
const script = document.createElement('script');

// Set the source to the JSONP API endpoint with the callback parameter
script.src = 'https://example.com/api?callback=handleResponse';

// Append the script to the document to make the request
document.body.appendChild(script);