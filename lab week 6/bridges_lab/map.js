let areaCenterCoordinates =  [36.090240, -93.324333]  // Array of latitude and longitude 
let zoomLevel = 4  // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridges-map').setView(areaCenterCoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map);

let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconAnchor: [30, 30],     // move the icon so the bottom of the pin is on top of the coordiates
    iconSize: [30, 30],       // define size 
    popupAnchor: [-15, -25]   // where is popup, relative to icon
    
});


bridges =  [
    {"name": "Verrazano-Narrows Bridge	",  "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge",  "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge	",  "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge",  "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge",  "coordinates": [47.2690, -122.5517 ] }
]

bridges.forEach(function(usaBridges){
    // draw a marker for this college compus
    let markerText = `${usaBridges.name}`
    L.marker(usaBridges.coordinates, {icon: bridgeIcon} ).bindPopup (markerText).addTo(map);
   
});

//L.marker([51.5, -0.09], {icon: bridgeIcon}).addTo(map);

let canvas = document.querySelector('#bridges-chart')
let context = canvas.getContext('2d')

chart = new Chart(context, { 
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bridge	", "George Washington Bridge","Tacoma Narrows Bridge"],  
        datasets: [{
            label: 'USA bridges Chart',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],   // this is the chart data
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'] // the colors of the data
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







