#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var clim8Pkg = require("./package.json");

var clim8Program = require("commander");

var Weather = require("./lib/Weather");

var weather = new Weather();
var EXIT_ERROR = 1;
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
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
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", weather.getCurrentWeatherByCity(clim8Program.city));

        case 4:
          if (!clim8Program.citystate) {
            _context.next = 9;
            break;
          }

          if (!(clim8Program.citystate.length !== 2)) {
            _context.next = 8;
            break;
          }

          console.log("City and state are mandatory, example: London,Uk");
          return _context.abrupt("return", process.exit(EXIT_ERROR));

        case 8:
          return _context.abrupt("return", weather.getCurrentWeatherByCityAndState(clim8Program.citystate[0], clim8Program.citystate[1]));

        case 9:
          if (!clim8Program.coordinates) {
            _context.next = 14;
            break;
          }

          if (!(clim8Program.coordinates.length !== 2)) {
            _context.next = 13;
            break;
          }

          console.log("Latitude and Longitude are mandatory, example: 44.4949,11.3426");
          return _context.abrupt("return", process.exit(EXIT_ERROR));

        case 13:
          return _context.abrupt("return", weather.getCurrentWeatherByCoordinates(clim8Program.coordinates[0], clim8Program.coordinates[1]));

        case 14:
          console.log("Confused? Do you need some help? clim8 --help");
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0.message);
          process.exit(EXIT_ERROR);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[1, 17]]);
}))();
