const fetch = require("node-fetch");
const Formatter = require("./Formatter");
const formatter = new Formatter();

const OPEN_WEATHER_MAP_KEY = "8671064fb9e239934b0070f7aa350ae7";
const OPEN_WEATHER_MAP_WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather";

module.exports = class Weather {
    /**
     * get current weather situation of the provided city
     * @param {string} [city]
     */
    async getCurrentWeatherByCity(city) {
        const urlWeatherQueryByCity = `${OPEN_WEATHER_MAP_WEATHER_URL}?APPID=${OPEN_WEATHER_MAP_KEY}&q=${city}`;

        try {
            const response = await fetch(urlWeatherQueryByCity);
            if (response.status !== 200 && response.status !== 400){
                throw new Error("Sorry, clim8 could not reach its server.");
            }

            const json = await response.json();
            const weatherByCity = formatter.formatWeatherData(json);
            console.log(this.displayForecastMessage(weatherByCity));
        }
        catch (err) {
            console.log(`Sorry, clim8 encoutered this error: ${err.message}`);
        }
    }

    /**
     * get current weather situation of the city along the provided coordinates
     * @param {float} [latitude]
     * @param {float} [longitude]
     */
    async getCurrentWeatherByCoordinates(latitude, longitude) {
        const urlWeatherQueryByCoordinates = `${OPEN_WEATHER_MAP_WEATHER_URL}?APPID=${OPEN_WEATHER_MAP_KEY}&lat=${latitude}&lon=${longitude}`;

        try {
            const response = await fetch(urlWeatherQueryByCoordinates);
            if (response.status !== 200 && response.status !== 400){
                throw new Error("Sorry, clim8 could not reach its server.");
            }

            const json = await response.json();
            const weatherByCoordinates = formatter.formatWeatherData(json);
            console.log(this.displayForecastMessage(weatherByCoordinates));
        }
        catch (err) {
            console.log(`Sorry, clim8 encoutered this error: ${err.message}`);
        }
    }

    /**
     *
     * @param {object} [formattedData]
     * @returns {string} [messageData]
     */
    displayForecastMessage(formattedData){
        const messageData = `In ${formattedData.name} the weather looks ${formattedData.type} with minimum ${formattedData.min} and maximum ${formattedData.max}`;
        return messageData;
    }
};
