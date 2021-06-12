"use strict";
let weatherDetails;

function showWeatherDOM(data) {
    weatherDetails = data;
    console.log("Got data from WeatherUtil for: " + weatherDetails.location);
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
    setHourlyTemp(weatherDetails.hourly)
}

function setHourlyTemp(hourlyForecastList) {
    for (let i = 1; i < hourlyForecastList.length; i++) {
        if(i == 6) break;
        let temp = "#temp" + i;
        let hour = "#hr" + i;
        $(temp).text(hourlyForecastList[i].temp).append('&deg;');
        $(hour).text(hourlyForecastList[i].time)
    }
}
