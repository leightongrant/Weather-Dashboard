
// Imports
import { cities } from "./cities.js";
import { renderForecast, renderRecentSearches, removeSearch } from "./logic.js";



$(function () { // Document ready   


    // Render forecast 
    //renderForecast();
    // Call renderRecentSearches function to render buttons
    renderRecentSearches();


    // Adds autocomplete to search box
    $("#citySearch").autocomplete({
        source: cities
    });

    // Gets value from search box when enter key pressed
    $("#citySearch").keypress(function (event) {
        if (event.keyCode === 13) {
            // Render Forecast
            renderForecast($("#citySearch").val().trim());
            // Clear search box
            $("#citySearch").val("");
        }
    });

    // Gets value from search box when search button clicked
    $("#searchButton").on('click', function () {

        // Render forcast
        renderForecast($('#citySearch').val().trim());

        // Clear search box
        $("#citySearch").val("");
    });

    // Adds search to recent searches
    $('#history').on('click', (event) => {
        let thisSearch = $(event.target).text();
        renderForecast(thisSearch);
    });

    // Removes search
    $('.remove').on('click', (event) => {
        event.stopPropagation();
        let thisSearch = $(event.target).parent().text();
        // Call remove search function
        removeSearch(thisSearch);
        location.reload();
    });









}); // Document ready