// Select the canvas element from the HTML document
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 200, 150);

// Draw a circle
ctx.beginPath();
ctx.arc(400, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
ctx.closePath();

// Draw a line
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(750, 550);
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

// Add text
ctx.font = '24px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello, Canvas!', 300, 50);