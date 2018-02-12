const request = require('request');
const Formatter = require('./Formatter');
const formatter = new Formatter();

const OPEN_WEATHER_MAP_KEY = '8671064fb9e239934b0070f7aa350ae7';
const OPEN_WEATHER_MAP_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = class Weather {
    /**
     * get current weather situation of the provided city
     * @param city string
     */
    getCurrentWeatherByCity(city) {
        const urlWeatherQueryByCity = `${OPEN_WEATHER_MAP_WEATHER_URL}?APPID=${OPEN_WEATHER_MAP_KEY}&q=${city}`;

        request(urlWeatherQueryByCity, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);

                const weatherByCity = formatter.formatWeatherData(info);
                console.log(weatherByCity);
            }
        });
    }

    /**
     * get current weather situation of the city along the provided coordinates
     * @param latitude float
     * @param longitude float
     */
    getCurrentWeatherByCoordinates(latitude, longitude) {
        const urlWeatherQueryByCoordinates = `${OPEN_WEATHER_MAP_WEATHER_URL}?APPID=${OPEN_WEATHER_MAP_KEY}&lat=${latitude}&lon=${longitude}`;

        request(urlWeatherQueryByCoordinates, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                const weatherByCoordinates = formatter.formatWeatherData(info);
                console.log(weatherByCoordinates);
            }
        });
    }
};
