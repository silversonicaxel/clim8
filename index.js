#!/usr/bin/env node
const Weather = require('./lib/Weather');
const weather = new Weather();

weather.getCurrentWeatherByCity("Reggio nell'Emilia");

weather.getCurrentWeatherByCoordinates(52.379189, 4.899431);

console.log('I am checking weather forecasts');