"use strict";
let weatherObj;
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
    weatherObj = {};
    weatherObj.cityName = data.name;
    weatherObj.windSpeed = data.wind.speed;
    weatherObj.timezone = data.timezone;
    weatherObj.currentTemp = (data.main.temp).toFixed(0);
    weatherObj.minTemp = data.main.temp_min;
    weatherObj.maxTemp = data.main.temp_max;
    weatherObj.country = data.sys.country;
    weatherObj.description = capitalized(data.weather[0].description);
    //TODO write function for undefined locations
    weatherObj.location = data.name + ", " + data.sys.country

    return weatherObj;
}

function capitalized(str) {
    let transformedString = ''
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if(transformedString !==""){
            transformedString = transformedString + " ";
        }
        transformedString = transformedString + arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return transformedString;
}