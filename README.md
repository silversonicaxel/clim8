# clim8
clim8 is a CLI Weather forecast service based on the API of https://openweathermap.org/

## Usage
```bash

$ node index.js -C "Reggio nell'Emilia"

$ node index.js -C Amsterdam

$ node index.js -L 54,12

```


## How-to
```bash

$ node index.js --help

Usage: index [options] <option>


  Options:

    -V, --version                           output the version number
    -C, --city <city>                       Provide city
    -L, --coordinates <latitude,longitude>  Provide latitude and longitude
    -h, --help                              output usage information

```
