const jsonServer = require('json-server');

// Install json-server by running: npm install -g json-server

// Import the json-server module

// Create a server instance
const server = jsonServer.create();

// Create a router using a JSON file or object
const router = jsonServer.router('db.json'); // Replace 'db.json' with your JSON file

// Use default middlewares
const middlewares = jsonServer.defaults();

// Apply middlewares
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const PORT = 3000; // You can change the port if needed
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});