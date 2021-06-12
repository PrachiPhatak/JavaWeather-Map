"use strict";
let weatherDetails;

function showWeatherDOM(data) {
    weatherDetails = data;
    console.log("Got data from DOM " + data.cityName);
    console.log("Got data from DOM " + data.timezone);
    console.log("Got data from DOM " + data.sunrise);
    console.log("Got data from DOM " + data.sunset);
    $("#locationName").text(weatherDetails.location);
    $("#todayTemp").text(weatherDetails.currentTemp).append('&deg;');
    $("#high").text(weatherDetails.maxTemp).append('&deg;');
    $("#low").text(weatherDetails.minTemp).append('&deg;');
    $("#date").text(new Date().toDateString());
    $("#sunrise").text(weatherDetails.sunrise)
    $("#sunset").text(weatherDetails.sunset)
    $("#description").text(weatherDetails.description);
    $("#wind").text(weatherDetails.windSpeed);
    $("#rain").text(weatherDetails.rain);
}
