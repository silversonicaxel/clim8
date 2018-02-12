module.exports = class Formatter {
    /**
     * format data structure from OpenWeatherMap api
     * @param data object
     * @return parsedData object
     */
    formatWeatherData(data){
        const parsedData = {
            name: data.name,
            min: data.main.temp_min - 273.15,
            max: data.main.temp_max - 273.15,
            type: data.weather.map(el => el.main).join(", ")
        };

        return parsedData;
    }
};
