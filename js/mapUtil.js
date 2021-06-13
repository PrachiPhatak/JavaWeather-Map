"use strict";
mapboxgl.accessToken = MAPBOX_TOKEN;
let map;
let geocoder;
let results;
let marker;
init();

function init(){
    map = initMap();
    marker = getMarker();
    addGeocoder();
    getResultsFromGeocoder();
    onMapClickEvent();
    getWeather(marker._lngLat.lng, marker._lngLat.lat)
    map.addControl(new mapboxgl.NavigationControl());
}

function initMap() {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-95.83494113076989, 29.708232766969303],
        zoom: 3,
    })
}

function addGeocoder() {
    geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        types: 'country,region,place,postcode,locality,neighborhood',
        mapboxgl: mapboxgl,
        marker: false
    });
    geocoder.onAdd(map)
    geocoder.addTo('#geocoder');
}

function getResultsFromGeocoder() {
    // Get the geocoder results container.
    results = document.getElementById('result');

    // Add geocoder result to container.
    geocoder.on('result', function (e) {
        let lon = e.result.geometry.coordinates[0];
        let lat = e.result.geometry.coordinates[1];

        marker.setLngLat(e.result.geometry.coordinates)//.addTo(map)
        getWeather(lon, lat);
        //results.innerText = JSON.stringify(e.result, null, 2);
    });

    // Clear results container when search is cleared.
    geocoder.on('clear', function () {
        results.innerText = '';
    });
}

function getMarker() {
    return new mapboxgl.Marker({color: "red"})
        .setLngLat([-95.83494113076989, 29.708232766969303])
        .addTo(map);
}

function onMapClickEvent() {
    map.on("click", function (event) {
        console.log(event);
        marker.setLngLat(event.lngLat)//.addTo(map)
        getWeather(event.lngLat.lng, event.lngLat.lat);
        geocoder.clear();
    });
}
