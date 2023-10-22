// convertToJSON takes a provided csv data and returns the proper format in
// JSON. Different variables for the line splits and category splits are created.
// A new array with the jsonFormat is created. Using a for loop to cycle through
// ever line after the first, the data is split at each comma. Another for loop takes each
// element that corresponds to the category list sets a specific item to its category.
// Finally the array for jsonFormat is pushed the movieInfo. At the end of this cycle,
// this array is returned.
"use strict";
function convertToJSON(data) {
    var lines = data.split("\n");
    var categories = lines[0].split(",");
    var jsonFormat = [];

    for (var i = 1; i < lines.length; i++) {
        var movieInfo = {};
        var thisLine = lines[i].split(",");

        for (var j = 0; j < categories.length; j++) {
            movieInfo[categories[j]] = thisLine[j];
        }

        jsonFormat.push(movieInfo);
    }
    return jsonFormat;
}

// loadFiles takes two inputs. A csv input file and a json output file.
// Using a readFileSync, the csv data is passed to the movieData variable.
// Next this data is passed to a convertToJSON function and handed to jsonMovieData.
// Lastly a writeFileSync is passed the jsonMovieData. This writes all of the information
// into the provided output file.
"use strict";
function loadFiles(csv, json) {
    var fs = require("fs");
    var movieData = fs.readFileSync(csv, {encoding: "utf8", flag: "r"});

    var jsonMovieData = convertToJSON(movieData);
    fs.writeFileSync(json, JSON.stringify(jsonMovieData));
}

// Simple call to loadFiles with the appropriate links to csv and json files.
// Enables this program to run when called from the terminal.
loadFiles("../data/movie_metadata_subset.csv", "../data/movie_metadata_subset.json")