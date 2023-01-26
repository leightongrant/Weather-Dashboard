import { cities } from "./cities.js";

const myApiKey = '9270527dd2d838bcebaf2aaf5a875cff';
const city = 'London';
const queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units='metric'`;

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'c85ed73774msha70278bc44e8c47p168198jsnc0134ddc88de',
//         'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
//     }
// };

// fetch(queryUrl)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//var cities = reader.readAsText('./assests/csv/test.txt');


//console.log(mycities);

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


$(function () {

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



});