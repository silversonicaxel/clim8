module.exports = class Formatter {
    /**
     * format data structure from OpenWeatherMap api
     * @param {object} [data]
     * @returns {object} [parsedData]
     */
    formatWeatherData(data) {
        const parsedData = {
            name: data.name ? data.name : "the middle of nowhere",
            state: data.sys ? data.sys.country : "XX",
            min: this.round2Decimals(data.main.temp_min - 273.15, 1),
            max: this.round2Decimals(data.main.temp_max - 273.15, 1),
            type: data.weather.map(el => el.main).join(", "),
            typeId: data.weather[0].id
        };

        return parsedData;
    }

    /**
     * format number to X decimals
     * @param {number} [number]
     * @param {number} [maxDecimals=2]
     * @returns {number|float}
     */
    round2Decimals(number, maxDecimals = 2) {
        const value = Math.pow(10, maxDecimals);
        return Math.round(number * value) / value;
    }
};
