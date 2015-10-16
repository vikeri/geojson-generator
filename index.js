"use strict";

var mock = require("json-api-generator");

mock({
    // We keep our templates in a directory called templates
    templateDir: './templates/',

    // We create a helper that will return one of the values Project, Office or Trip.
    helpers: {
        place: function() {
            var place = ["Project","Office","Trip"];
            return place[Math.floor(Math.random() * place.length)];
        }
    },

    // We wish to see when the resource is requested in the terminal
    log: true,

    // We also with that the browser should be opened to the correct url when starting the server
    open: true,
});
