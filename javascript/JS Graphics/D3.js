// Set dimensions and margins for the chart
const width = 500;
const height = 300;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };

// Sample data
const data = [
    { name: "A", value: 30 },
    { name: "B", value: 80 },
    { name: "C", value: 45 },
    { name: "D", value: 60 },
    { name: "E", value: 20 },
    { name: "F", value: 90 },
    { name: "G", value: 55 },
];

// Create SVG container
const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Set up scales
const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width - margin.left - margin.right])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([height - margin.top - margin.bottom, 0]);

// Add axes
svg.append("g")
    .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
    .call(d3.axisBottom(x));

svg.append("g")
    .call(d3.axisLeft(y));

// Draw bars
svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - margin.top - margin.bottom - y(d.value))
    .attr("fill", "steelblue");