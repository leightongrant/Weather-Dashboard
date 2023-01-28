
// Imports
import { cities } from "./cities.js";
import { renderForecast } from "./forecastdata.js";



$(function () { // Document ready   


    // Fetch Weather 
    renderForecast();

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
            // Clear display before updating
            $('#weatherData').html('');
            renderForecast($("#citySearch").val().trim());
        }
    });
    // Gets value from search box when search button clicked
    $("#searchButton").on('click', function () {
        // Clear display before updating
        $('#weatherData').html('');
        // Get forcast
        renderForecast($('#citySearch').val().trim());
        //console.log($("#citySearch").val());
        addToLocalStorage('recent', $("#citySearch").val().trim());
        // Clear search box
        $("#citySearch").val("");
    });














}); // Document ready