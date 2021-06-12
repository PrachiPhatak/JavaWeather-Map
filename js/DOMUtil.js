"use strict";
let weatherDetails;

function showWeatherDOM(data) {
    weatherDetails = data;
    console.log("Got data from DOM " + data.cityName);
    console.log("Got data from DOM " + data.timezone);
    console.log("Got data from DOM " + data.minTemp);
    console.log("Got data from DOM " + data.maxTemp);
    $("#location").text(weatherDetails.location);
    $("#todayTemp").text(weatherDetails.currentTemp).append('&deg;');
    $("#high").text(weatherDetails.maxTemp).append('&deg;');
    $("#low").text(weatherDetails.minTemp).append('&deg;');
    $("#date").text(new Date().toDateString());
    $("#sunrise").text(weatherDetails.sunrise)
    $("#description").text(weatherDetails.description);
}




//$("#map").css("height", window.innerHeight * 0.8)
//$("#map").css("width", window.innerWidth * 0.95)

//$(".mapboxgl-canvas").css("height", window.innerHeight * 0.8)
//$(".mapboxgl-canvas").css("width", window.innerWidth * 0.95)

