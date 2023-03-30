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

let goldenIcon = L.icon({
    iconUrl: 'golden.png',
    iconAnchor: [30, 30],     // move the icon so the bottom of the pin is on top of the coordiates
    iconSize: [30, 30],       // define size 
    popupAnchor: [-15, -25]   // where is popup, relative to icon
    
});


bridges =  [
    {"name": "Verrazano-Narrows Bridge	", "span" : 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "span": 1280.2,  "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge	","span": 1158.0,  "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "span": 1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "span": 853.44,  "coordinates": [47.2690, -122.5517 ] }

]

// adding bridge marker at the bridge locations
bridges.forEach(function(usaBridges){
    // draw a marker for this bridge 
    let markerText = usaBridges.name
    L.marker(usaBridges.coordinates, {icon: bridgeIcon} ).bindPopup (markerText).addTo(map);
   
});


// adds diffrent bridge icon marker for the longest brisge
let bridgeCoordinates = [40.6066, -74.0447]
let bridgeMarker = L.marker(bridgeCoordinates, {icon: goldenIcon} ).addTo(map);

//L.marker([51.5, -0.09], {icon: bridgeIcon}).addTo(map);


// 
let usaBridgNameArray = []

bridges.forEach(function(bridgeObject){
    let bridgeName = bridgeObject.name  // String
    usaBridgNameArray.push(bridgeName)
})

let usaBridgesSpanArray = []
bridges.forEach(function(spanObject){
    let spanData = spanObject.span  //String
    usaBridgesSpanArray.push(spanData)

})
    

let canvas = document.querySelector('#bridges-chart')
let context = canvas.getContext('2d')

chart = new Chart(context, { 
    type: 'bar',
    data: {
        labels: usaBridgNameArray,  
        datasets: [{
            label: 'USA bridges Chart',
            data: usaBridgesSpanArray ,   // this is the chart data
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'] ,// the colors of the data
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







