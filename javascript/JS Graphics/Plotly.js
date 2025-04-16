const Plotly = require('plotly.js-dist');

// Import Plotly.js

// Data for the plot
const trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 21],
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Line + Markers'
};

const trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [16, 5, 11, 9, 15],
    mode: 'markers',
    type: 'scatter',
    name: 'Markers Only'
};

const data = [trace1, trace2];

// Layout for the plot
const layout = {
    title: 'Basic Plotly.js Example',
    xaxis: {
        title: 'X Axis Label'
    },
    yaxis: {
        title: 'Y Axis Label'
    }
};

// Render the plot in a browser
Plotly.newPlot('plotDiv', data, layout);