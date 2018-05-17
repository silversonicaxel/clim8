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
        .option("-C, --city [city]", "provide city")
        .option("-S, --citystate [city,state]", "provide city and state", items => items.split(","))
        .option("-L, --coordinates [latitude,longitude]", "provide latitude and longitude", items => items.split(","))
        .parse(process.argv);

    try {
        if (clim8Program.city) {
            weather.getCurrentWeatherByCity(clim8Program.city);
        }

        else if (clim8Program.citystate) {
            if (clim8Program.citystate.length !== 2) {
                throw new Error("City and state are mandatory, example: London,Uk");
            }

            weather.getCurrentWeatherByCityAndState(clim8Program.citystate[0], clim8Program.citystate[1]);
        }

        else if (clim8Program.coordinates) {
            if (clim8Program.coordinates.length !== 2) {
                throw new Error("Latitude and Longitude are mandatory, example: 44.4949,11.3426");
            }

            weather.getCurrentWeatherByCoordinates(clim8Program.coordinates[0], clim8Program.coordinates[1]);
        }

        else {
            throw new Error("Confused? Do you need some help? clim8 --help");
        }
    }
    catch (error) {
        console.error(error.message);
        process.exit(EXIT_ERROR);
    }
})();
