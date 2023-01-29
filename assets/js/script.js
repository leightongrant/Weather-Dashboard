
// Imports
import { cities } from "./cities.js";
import { renderForecast, renderRecentSearches } from "./forecastdata.js";



$(function () { // Document ready   


    // Fetch Weather 
    renderForecast();
    renderRecentSearches();




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
            // Clear search box
            $("#citySearch").val("");
        }
    });
    // Gets value from search box when search button clicked
    $("#searchButton").on('click', function () {
        // Clear display before updating
        $('#weatherData').html('');
        // Get forcast
        renderForecast($('#citySearch').val().trim());

        // Clear search box
        $("#citySearch").val("");
    });














}); // Document ready