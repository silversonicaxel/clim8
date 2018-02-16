#!/usr/bin/env node
const clim8Pkg = require("./package.json");
const clim8Program = require("commander");

const Weather = require("./lib/Weather");
const weather = new Weather();

const EXIT_ERROR = 1;


(async () => {
    // clim8 program
    clim8Program
        .version(clim8Pkg.version)
        .usage("[options] <option>")
        .option("-C, --city <city>", "Provide city")
        .option("-L, --coordinates <latitude,longitude>", "Provide latitude and longitude", items => items.split(","))
        .parse(process.argv);

    try {
        if (clim8Program.city) {
            weather.getCurrentWeatherByCity(clim8Program.city);
        }

        if (clim8Program.coordinates) {
            if (clim8Program.coordinates.length !== 2) {
                throw new Error("Coordinates must be 2, latitude and longitude");
            }

            weather.getCurrentWeatherByCoordinates(clim8Program.coordinates[0], clim8Program.coordinates[1]);
        }

        throw new Error("Confused? Do you need some help? clim8 --help");
    }
    catch (error) {
        console.log(error.message);
        process.exit(EXIT_ERROR);
    }
})();
