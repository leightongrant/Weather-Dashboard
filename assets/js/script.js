
// Imports
import { cities } from "./cities.js";
import { forecast } from "./weatherdata.js";

$(function () { // Document ready

    // Function to get items from local storage
    const getFromLocalStorage = (name) => {
        return JSON.parse(localStorage.getItem(name));
    };
    // Function to store items to local storage
    const addToLocalStorage = (name, item) => {
        // Check if data already stored
        let list = [];
        if (getFromLocalStorage(name) !== null) {
            list = getFromLocalStorage(name);
        }
        // Check if item is empty or already in storage
        if (item.length === 0 || list.includes(item)) {
            list = getFromLocalStorage(name);
        } else {
            // Add new items to array ans save to local storage
            list.unshift(item);
            localStorage.setItem(name, JSON.stringify(list));
        }
    };




    // Adds autocomplete to search box
    $("#citySearch").autocomplete({
        source: cities
    });
    // Gets value from search box when enter key pressed
    $("#citySearch").keypress(function (event) {
        if (event.keyCode === 13) {
            console.log($("#citySearch").val().trim());
        }
    });
    // Gets value from search box when search button clicked
    $("#searchButton").on('click', function () {
        //console.log($("#citySearch").val());
        addToLocalStorage('recent', $("#citySearch").val().trim());
        // Clear search box
        $("#citySearch").val("");
    });


    // Loop through array and construct element with data
    forecast.forEach((day) => {
        // Create elements to display data
        let elements = '';
        elements = `<div class="col">`;
        elements += `<div class="p-3 border bg-light test-2">`;
        elements += `<p class="date fs-6 fw-bold">${moment(day.date).format('ddd Do MMM, YYYY')}</p>`;
        elements += `<ul class="weatherData">`;
        elements += `<img src="http://openweathermap.org/img/w/${day.icon}.png" "alt="Weather icon"></li>`;
        elements += `<li>Temp:  ${day.temp} &deg;C</li>`;
        elements += `<li>Wind:  ${day.wind} KPH</li>`;
        elements += `<li>Humidity:  ${day.humidity} %</li>`;
        elements += `</ul></div></div>`;

        // Append elements to render forecast display
        $(elements).appendTo($('#weatherData'));
    });

    // Render todays weather
    const today = forecast[0];
    $('#todayIcon').html(`<img src="http://openweathermap.org/img/w/${today.icon}.png" "alt="Weather icon">`);
    $('#todayTemp').html(`Temp:  ${today.temp} &deg;C`);
    $('#todayWind').html(`Wind:  ${today.wind} KPH`);
    $('#todayHumidity').html(`Humidity:  ${today.humidity} &deg;C`);
    $('#todayDate').text(moment(today.date).format('ddd Do MMM, YYYY'));












}); // Document ready