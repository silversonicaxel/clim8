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
                throw new Error("the application could not reach its server.");
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
     * get current weather situation of the provided city and state
     * @param {string} [city]
     * @param {string} [state]
     */
    async getCurrentWeatherByCityAndState(city, state) {
        const urlWeatherQueryByCityState = `${OPEN_WEATHER_MAP_WEATHER_URL}?APPID=${OPEN_WEATHER_MAP_KEY}&q=${city},${state}`;

        try {
            const response = await fetch(urlWeatherQueryByCityState);
            if (response.status !== 200 && response.status !== 400){
                throw new Error("the application could not reach its server.");
            }

            const json = await response.json();
            const weatherByCityState = formatter.formatWeatherData(json);
            console.log(this.displayForecastMessage(weatherByCityState));
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
                throw new Error("the application could not reach its server.");
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
        const messageData = `${this.getWeatherEmoji(parseInt(formattedData.typeId, 10))} In ${formattedData.name}, ${formattedData.state} the weather looks ${formattedData.type} with minimum ${formattedData.min} °C and maximum ${formattedData.max} °C`;
        return messageData;
    }

    /**
     * retrieve the emoji related to the weather forecast
     * @param {number} [id]
     * @returns {string}
     */
    getWeatherEmoji(id){
        if (id >= 200 && id < 300){
            return '⛈️ ';
        }
        else if (id >= 300 && id < 600 || id >= 958 && id < 962){
            return '🌧️ ';
        }
        else if (id >= 600 && id < 700 || id == 906){
            return '🌨️ ';
        }
        else if (id >= 700 && id < 800){
            return '🌫️ ';
        }
        else if (id == 800 || id == 951){
            return '☀️ ';
        }
        else if (id == 801){
            return '🌤️ ';
        }
        else if (id >= 802 && id < 900){
            return '☁️ ';
        }
        else if (id >= 900 && id < 903 || id == 962){
            return '🌪 ';
        }
        else if (id == 903){
            return '❄️ ';
        }
        else if (id == 904){
            return '♨️ ';
        }
        else if (id == 905 || id >= 952 && id < 958){
            return '💨 ';
        }
        else{
            return '❔';
        }
    }
};
