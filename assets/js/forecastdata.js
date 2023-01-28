// Function to format date
const formatDate = (dt) => {
    return moment.unix(dt).format('MMM Do, YYYY');
};

// Function to fetch forecast data
const getForecast = (lat, lon, cityName, appid = '9270527dd2d838bcebaf2aaf5a875cff') => {
    let queryURL = `https://api.openweathermap.org/data/2.5/onecall?`;
    queryURL += `lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${appid}`;
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
                    $('#cityName').text(`${cityName}`);
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
            alert(err);
        });
};

// Function to get coordinates
const renderForecast = (city = 'London', appid = 'e56b324652925293f54beb9630933db8') => {
    // Api call to get lat and lon data from city name
    let queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=5&appid=${appid}`;
    return fetch(queryURL)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(geo => {
            // Get lat, lon and city name
            const lat = geo[0].lat;
            const lon = geo[0].lon;
            const cityName = `${geo[0].name}, ${geo[0].country}`;

            // Call getForecast with lat, lon, and City Name data
            getForecast(lat, lon, cityName, appid);

        })
        .catch(err => alert(err));

};



export { renderForecast };