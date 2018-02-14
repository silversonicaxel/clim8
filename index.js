#!/usr/bin/env node
const Weather = require('./lib/Weather');
const weather = new Weather();

weather.getCurrentWeatherByCity("Reggio nell'Emilia");

weather.getCurrentWeatherByCoordinates(139.21, 35.12);

console.log('I am checking weather forecasts');