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

$(function () {
    const availableCities = $.csv.toArray(cities);
    $("#citySearch").autocomplete({
        source: availableCities
    });
});