// const forecastData = {
//     "cod": "200",
//     "message": 0,
//     "cnt": 5,
//     "list": [
//         {
//             "dt": 1674766800,
//             "main": {
//                 "temp": 5.06,
//                 "feels_like": 1.7,
//                 "temp_min": 4.91,
//                 "temp_max": 5.06,
//                 "pressure": 1030,
//                 "sea_level": 1030,
//                 "grnd_level": 1028,
//                 "humidity": 84,
//                 "temp_kf": 0.15
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 4.42,
//                 "deg": 8,
//                 "gust": 9.65
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-01-26 21:00:00"
//         },
//         {
//             "dt": 1674777600,
//             "main": {
//                 "temp": 5.16,
//                 "feels_like": 1.71,
//                 "temp_min": 5.16,
//                 "temp_max": 5.36,
//                 "pressure": 1030,
//                 "sea_level": 1030,
//                 "grnd_level": 1027,
//                 "humidity": 78,
//                 "temp_kf": -0.2
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 99
//             },
//             "wind": {
//                 "speed": 4.65,
//                 "deg": 8,
//                 "gust": 9.17
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-01-27 00:00:00"
//         },
//         {
//             "dt": 1674788400,
//             "main": {
//                 "temp": 5.05,
//                 "feels_like": 1.88,
//                 "temp_min": 5.05,
//                 "temp_max": 5.05,
//                 "pressure": 1029,
//                 "sea_level": 1029,
//                 "grnd_level": 1026,
//                 "humidity": 74,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 4.07,
//                 "deg": 5,
//                 "gust": 9.34
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-01-27 03:00:00"
//         },
//         {
//             "dt": 1674799200,
//             "main": {
//                 "temp": 3.54,
//                 "feels_like": -0.04,
//                 "temp_min": 3.54,
//                 "temp_max": 3.54,
//                 "pressure": 1029,
//                 "sea_level": 1029,
//                 "grnd_level": 1026,
//                 "humidity": 84,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 803,
//                     "main": "Clouds",
//                     "description": "broken clouds",
//                     "icon": "04n"
//                 }
//             ],
//             "clouds": {
//                 "all": 74
//             },
//             "wind": {
//                 "speed": 4.17,
//                 "deg": 14,
//                 "gust": 11.42
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2023-01-27 06:00:00"
//         },
//         {
//             "dt": 1674810000,
//             "main": {
//                 "temp": 3.12,
//                 "feels_like": 0.11,
//                 "temp_min": 3.12,
//                 "temp_max": 3.12,
//                 "pressure": 1030,
//                 "sea_level": 1030,
//                 "grnd_level": 1027,
//                 "humidity": 91,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 801,
//                     "main": "Clouds",
//                     "description": "few clouds",
//                     "icon": "02d"
//                 }
//             ],
//             "clouds": {
//                 "all": 17
//             },
//             "wind": {
//                 "speed": 3.18,
//                 "deg": 28,
//                 "gust": 9.46
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2023-01-27 09:00:00"
//         }
//     ],
//     "city": {
//         "id": 2643743,
//         "name": "London",
//         "coord": {
//             "lat": 51.5085,
//             "lon": -0.1257
//         },
//         "country": "GB",
//         "population": 1000000,
//         "timezone": 0,
//         "sunrise": 1674719276,
//         "sunset": 1674751062
//     }
// };
// Function to format date
const formatDate = (dt) => {
    return moment.unix(dt).format('MMM Do, YYYY');
};
// Function to fetch forecast data
const fetchForecast = (lat = 51.5073219, lon = -0.1276474, units = 'metric', appid = '9270527dd2d838bcebaf2aaf5a875cff') => {
    let queryURL = `https://api.openweathermap.org/data/2.5/onecall?`;
    queryURL += `lat=${lat}&lon=${lon}&units=${units}&appid=${appid}&exclude=current,minutely,hourly,alerts`;
    console.log(queryURL);
    return fetch(queryURL)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(forecast => {
            // Object store required data from dump
            const dailyObj = {
                date: 0,
                humidity: 0,
                temp: 0,
                wind: 0,
                icon: '',
            };
            // Array to store Objects
            const dailyArr = [];
            //Loop through data dump and set object values
            forecast.daily.forEach(d => {
                dailyObj.date = formatDate(d.dt);
                dailyObj.humidity = d.humidity;
                dailyObj.temp = d.temp.day;
                dailyObj.wind = d.wind_speed;
                dailyObj.icon = d.weather[0].icon;
                // Stringify objects and push to array
                dailyArr.push(JSON.stringify(dailyObj));
            });

            // Array to store processed data
            const fiveDayForecast = [];

            // Loop through dailyArr and parse data
            for (let i = 0; i < 6; i++) {
                // Push data to array
                fiveDayForecast.push(JSON.parse(dailyArr[i]));
            }
            // Loop through array and construct element with data
            //fiveDayForecast.forEach((day) => {
            for (let day = 0; day < fiveDayForecast.length; day++)
                if (day === 0) {
                    // Render todays weather
                    $('.today').addClass(`state-${fiveDayForecast[day].icon}`);
                    //$('#cityName').text(`${fiveDayForecast[day].city}`);
                    $('#todayIcon').html(`<i class="owi owi-5x owi-${fiveDayForecast[day].icon}"></i>`);
                    // ('#todayIcon').html(`<img src="http://openweathermap.org/img/w/${today.icon}.png" "alt="Weather icon">`);
                    $('#todayTemp').html(`Temp:  ${fiveDayForecast[day].temp} &deg;C`);
                    $('#todayWind').html(`Wind:  ${fiveDayForecast[day].wind} KPH`);
                    $('#todayHumidity').html(`Humidity:  ${fiveDayForecast[day].humidity} %`);
                    $('#todayDate').text(fiveDayForecast[day].date);
                    // $('#todayDate').text(moment(fiveDayForecast[day].date).format('ddd Do MMM, YYYY'));

                } else {
                    // Create elements to display data
                    let elements = '';
                    elements = `<div class="col">`;
                    elements += `<div class="p-3 border bg-light rounded-3 state-${fiveDayForecast[day].icon}">`;
                    elements += `<p class="date fs-6 fw-bold">${fiveDayForecast[day].date}</p>`;
                    // elements += `<p class="date fs-6 fw-bold">${moment(fiveDayForecast[day].date).format('ddd Do MMM, YYYY')}</p>`;
                    elements += `<ul class="weatherData">`;
                    // elements += `<li><img src="http://openweathermap.org/img/w/${day.icon}.png" "alt="Weather icon"></li>`;
                    elements += `<li><i class='owi owi-4x owi-${fiveDayForecast[day].icon}'></i></li>`;
                    elements += `<li>Temp:  ${fiveDayForecast[day].temp} &deg;C</li>`;
                    elements += `<li>Wind:  ${fiveDayForecast[day].wind} KPH</li>`;
                    elements += `<li>Humidity:  ${fiveDayForecast[day].humidity} %</li>`;
                    elements += `</ul></div></div>`;

                    // Append elements to render forecast display
                    $(elements).appendTo($('#weatherData'));
                }


            //});
        })
        .catch(err => {
            console.log(err);
            ($('.today')).html($(`<div class="col-12"><h2 class="">${city}: City not found</h2></div>`));
        });
};


export { fetchForecast };