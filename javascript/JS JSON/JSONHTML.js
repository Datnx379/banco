// Sample JSON data
const jsonData = [
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Jane Smith", age: 25, city: "Los Angeles" },
    { name: "Sam Johnson", age: 35, city: "Chicago" }
];

// Function to generate HTML table from JSON data
function generateTable(data) {
    let table = "<table border='1'><tr><th>Name</th><th>Age</th><th>City</th></tr>";

    data.forEach(item => {
        table += `<tr>
                                <td>${item.name}</td>
                                <td>${item.age}</td>
                                <td>${item.city}</td>
                            </tr>`;
    });

    table += "</table>";
    return table;
}

// Insert the generated table into the HTML document
document.body.innerHTML = generateTable(jsonData);