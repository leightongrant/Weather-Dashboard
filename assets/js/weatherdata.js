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

const forecastData = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1674766800,
            "main": {
                "temp": 5.06,
                "feels_like": 1.7,
                "temp_min": 4.91,
                "temp_max": 5.06,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 1028,
                "humidity": 84,
                "temp_kf": 0.15
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.42,
                "deg": 8,
                "gust": 9.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-26 21:00:00"
        },
        {
            "dt": 1674777600,
            "main": {
                "temp": 5.16,
                "feels_like": 1.71,
                "temp_min": 5.16,
                "temp_max": 5.36,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 1027,
                "humidity": 78,
                "temp_kf": -0.2
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.65,
                "deg": 8,
                "gust": 9.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-27 00:00:00"
        },
        {
            "dt": 1674788400,
            "main": {
                "temp": 5.05,
                "feels_like": 1.88,
                "temp_min": 5.05,
                "temp_max": 5.05,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 1026,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.07,
                "deg": 5,
                "gust": 9.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-27 03:00:00"
        },
        {
            "dt": 1674799200,
            "main": {
                "temp": 3.54,
                "feels_like": -0.04,
                "temp_min": 3.54,
                "temp_max": 3.54,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 1026,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 4.17,
                "deg": 14,
                "gust": 11.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-01-27 06:00:00"
        },
        {
            "dt": 1674810000,
            "main": {
                "temp": 3.12,
                "feels_like": 0.11,
                "temp_min": 3.12,
                "temp_max": 3.12,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 1027,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 17
            },
            "wind": {
                "speed": 3.18,
                "deg": 28,
                "gust": 9.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-01-27 09:00:00"
        }
    ],
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lat": 51.5085,
            "lon": -0.1257
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 0,
        "sunrise": 1674719276,
        "sunset": 1674751062
    }
};

// Array to store 5 day forecast
const forecast = [];
// Loop through data and construct an object and add to forecast array
forecastData.list.forEach((day) => {
    // Construct forecast ojbect
    const forecastObj = {
        date: day.dt_txt.slice(0, 10),
        time: day.dt_txt.slice(11),
        city: forecastData.city.name,
        temp: day.main.temp,
        humidity: day.main.humidity,
        wind: day.wind.speed,
        icon: day.weather[0].icon
    };
    // Push forecast object to forecast array for each day
    forecast.push(forecastObj);
});


export { forecast };