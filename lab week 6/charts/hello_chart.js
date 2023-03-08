let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ["Coke", "Pepsi", "Either", "Neither"],  
        datasets: [{
            label: 'Number of votes',
            data: [18, 14, 10, 7, 10],   // this is the chart data
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})