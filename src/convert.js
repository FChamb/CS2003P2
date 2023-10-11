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

function loadFiles(csv, json) {
    var fs = require("fs");
    var movieData = fs.readFileSync(csv, {encoding: "utf8", flag: "r"});

    var jsonMovieData = convertToJSON(movieData);
    fs.writeFileSync(json, JSON.stringify(jsonMovieData));
}

loadFiles("../data/movie_metadata_subset.csv", "../data/movie_metadata_subset.json")