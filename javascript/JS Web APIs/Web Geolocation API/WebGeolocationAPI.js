// Check if Geolocation is supported
if ("geolocation" in navigator) {
    // Get the current position
    navigator.geolocation.getCurrentPosition(
        (position) => {
            // Success callback
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
            // Error callback
            console.error(`Error occurred: ${error.message}`);
        }
    );
} else {
    console.log("Geolocation is not supported by your browser.");
}