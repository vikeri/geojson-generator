# geojson-generator
> A server that generates random GeoJSON responses

## Requires
* node (& npm)
* git

## Install
```
$ git clone https://github.com/vikeri/geojson-generator
$ cd geojson-generator
$ npm install
```
## Run
In folder geojson-generator:
```
$ node index.js
```
Each time the server is started it will generate a new geojson, but for that whole session the response will be the same. So if you want a new set of map points just restart the server:
`Ctrl-C` and `node index.js` again.