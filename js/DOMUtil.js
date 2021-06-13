"use strict";
let weatherDetails;

function showWeatherDOM(data) {
    weatherDetails = data;
    console.log("Got data from WeatherUtil for: " + weatherDetails.location);
    $("#locationName").text(weatherDetails.location);
    $("#todayTemp").text(!weatherDetails.currentTemp ? "Not Found" : weatherDetails.currentTemp).append('&deg;');
    $("#high").text(weatherDetails.maxTemp).append('&deg;');
    $("#low").text(weatherDetails.minTemp).append('&deg;');
    $("#date").text(new Date().toDateString());
    $("#sunrise").text(weatherDetails.sunrise)
    $("#sunset").text(weatherDetails.sunset)
    $("#description").text(weatherDetails.description);
    $("#wind").text(weatherDetails.windSpeed);
    $("#rain").text(weatherDetails.rain);
    setCurrentWeatherImage(weatherDetails.icon)
    setHourlyTemp(weatherDetails.hourly)
    setBackground(weatherDetails.isDay);
}

function setHourlyTemp(hourlyForecastList) {
    for (let i = 0; i < hourlyForecastList.length; i++) {
        if (i === 6) break;
        let temp = "#temp" + i;
        let hour = "#hr" + i;
        let imageId = "#hourlyWeatherImg" + i;
        let imgPath = "img/" + hourlyForecastList[i].icon + "-hr.svg";
        $(temp).text(hourlyForecastList[i].temp).append('&deg;');
        $(hour).text(hourlyForecastList[i].time)
        console.log("Imgpath: " + imgPath + "icon "+ hourlyForecastList[i].icon)
        $(imageId).attr("src", imgPath)
    }
}

function setCurrentWeatherImage(iconId) {
    let imgPath = "img/" + iconId + ".svg"
    console.log("Icon " + iconId + " ImagePath " + imgPath)
    $("#weatherImg").attr("src", imgPath)
}

$("#txtExtended").click(function () {
    if ($("#hourly").is(":visible")) {
        $("#more").text("Click to see Tomorrow's Forecast")
        $("#hourly").hide(400);
    } else {
        $("#more").text("Hide Tomorrow's Forecast")
        $("#hourly").show(400);
        ;
    }
});

function setBackground(isDay) {
    if (isDay) {
        $("body").css("background", "linear-gradient(#00d4ff, #090979)");
    } else {
        $("body").css("background", "linear-gradient(black, white)");
    }
}