// Load the Google Charts library
google.charts.load('current', { packages: ['corechart'] });

// Set a callback function to run when the library is loaded
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create the data table
    const data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2019', 1000, 400],
        ['2020', 1170, 460],
        ['2021', 660, 1120],
        ['2022', 1030, 540],
    ]);

    // Set chart options
    const options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        legend: { position: 'bottom' },
    };

    // Instantiate and draw the chart
    const chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}