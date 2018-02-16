# clim8
clim8 is a CLI Weather forecast service based on the API of https://openweathermap.org/

## Setup

clim8 can be installed locally or globally

#### Locally

```bash

$ npm install -D clim8

```

#### Globally

```bash

$ npm install -g clim8

```

## Usage

#### Locally

```bash

$ node index.js -C "Reggio nell'Emilia"

$ node index.js -C Amsterdam

$ node index.js -L 54,12

```

#### Globally

```bash

$ clim8 -C "Reggio nell'Emilia"

$ clim8 -C Amsterdam

$ clim8 -L 54,12

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
