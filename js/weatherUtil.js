"use strict";

function getWeather(lon, lat) {
    let data1;
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            APPID: OPEN_WEATHER_TOKEN,
            lon: lon,
            lat: lat,
            units: "imperial"
        },
        success: function (data) {
            console.log(data)
            console.log(data.name);
            console.log(data.wind.speed);
            showWeatherDOM(getWeatherObj(data));
            //return data
        },
        error: function () {
            alert("Error while getting weather data.")
        }
    });
}

function getWeatherObj(data) {
    let weatherObj = {};
    weatherObj.cityName = data.name;
    return weatherObj;
}