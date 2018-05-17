#!/usr/bin/env node
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clim8Pkg = require("./package.json");
var clim8Program = require("commander");

var Weather = require("./lib/Weather");
var weather = new Weather();

var EXIT_ERROR = 1;

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    // clim8 program
                    clim8Program.version(clim8Pkg.version).usage("[options] <option>").option("-C, --city [city]", "provide city").option("-S, --citystate [city,state]", "provide city and state", function (items) {
                        return items.split(",");
                    }).option("-L, --coordinates [latitude,longitude]", "provide latitude and longitude", function (items) {
                        return items.split(",");
                    }).parse(process.argv);

                    _context.prev = 1;

                    if (!clim8Program.city) {
                        _context.next = 6;
                        break;
                    }

                    weather.getCurrentWeatherByCity(clim8Program.city);
                    _context.next = 19;
                    break;

                case 6:
                    if (!clim8Program.citystate) {
                        _context.next = 12;
                        break;
                    }

                    if (!(clim8Program.citystate.length !== 2)) {
                        _context.next = 9;
                        break;
                    }

                    throw new Error("City and state are mandatory, example: London,Uk");

                case 9:

                    weather.getCurrentWeatherByCityAndState(clim8Program.citystate[0], clim8Program.citystate[1]);
                    _context.next = 19;
                    break;

                case 12:
                    if (!clim8Program.coordinates) {
                        _context.next = 18;
                        break;
                    }

                    if (!(clim8Program.coordinates.length !== 2)) {
                        _context.next = 15;
                        break;
                    }

                    throw new Error("Latitude and Longitude are mandatory, example: 44.4949,11.3426");

                case 15:

                    weather.getCurrentWeatherByCoordinates(clim8Program.coordinates[0], clim8Program.coordinates[1]);
                    _context.next = 19;
                    break;

                case 18:
                    throw new Error("Confused? Do you need some help? clim8 --help");

                case 19:
                    _context.next = 25;
                    break;

                case 21:
                    _context.prev = 21;
                    _context.t0 = _context["catch"](1);

                    console.error(_context.t0.message);
                    process.exit(EXIT_ERROR);

                case 25:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[1, 21]]);
}))();
