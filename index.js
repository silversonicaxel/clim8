#!/usr/bin/env node
const clim8Pkg = require("./package.json");
const clim8Program = require("commander");

const Weather = require("./lib/Weather");
const weather = new Weather();

// cli program
clim8Program
    .version(clim8Pkg.version)
    .option("-C, --city <city>", "Provide city")
    .option("-L, --coordinates <latitude,longitude>", "Provide latitude and longitude", items => items.split(","))
    .parse(process.argv);


if (clim8Program.city) {
    weather.getCurrentWeatherByCity(clim8Program.city);
}

if (clim8Program.coordinates && clim8Program.coordinates.length === 2) {
    weather.getCurrentWeatherByCoordinates(clim8Program.coordinates[0], clim8Program.coordinates[1]);
}
