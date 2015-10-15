"use strict";

var generator = require("json-api-generator");

generator({
	templateDir: './templates/',
	helpers: {
        place: function() {
            var place = ["Project","Office","Trip"];
            return place[Math.floor(Math.random() * place.length)];
        },
        markerSymbol: function () {
            var symbols = ["w","suitcase","heart","commercial"];
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
	},
    port: 1337,
	log: true,
	open: true,
});

