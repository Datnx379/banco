// JavaScript Graphics Example

// Set up the canvas and context
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 200, 150);

// Draw a circle
ctx.beginPath();
ctx.arc(400, 300, 75, 0, Math.PI * 2);
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
ctx.fillText('JavaScript Graphics Example', 250, 50);