// This body of code sets all of the variables that will be used throughout this
// program to access various elements of the HTML.
"use strict";
const json = "../data/movie_metadata_subset.json";
const movieDataBase = document.querySelector(".movieDataBase");
const ul = document.getElementById("database");
const movieQueue = document.querySelector(".movieQueue");
const ol = document.getElementById("queue");
var totalTime = 0;

// This function begins the process of loading the data from the json file into the appropriate
// list once the webpage has loaded.
"use strict";
window.addEventListener("load", () => {
    loadData();
});

// Load data grabs the json file with all of the movie data and passes it into a json
// parser which then hands the data to the next method.
"use strict";
function loadData() {
    fetch(json).then(rep => rep.json()).then((data) => {
        addToPage(data);
    });
};

// Add to page takes the parsed in data and cycles through ever movie item
// from the json parse. For each movie, two new list items are created. The
// proper movie minute and hour format is calculated using divide and mod operations.
// The text content of both list items are set to the specification appropriate format.
// Then each list element is given a hidden attribute, minutes, which stores the duration
// of the movie for later use. A conditional statement adds classList toggles to both items
// so that each item will have two states when clicked. Finally the first list item is added
// to the movie database and both list items are passed to addMovie.
"use strict";
function addToPage(data) {
    data.forEach((movie) => {
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        const mins = (parseInt(movie.duration) % 60);
        const hours = ((parseInt(movie.duration) - (parseInt(movie.duration) % 60)) / 60);
        const movieYear = movie.title_year.substring(0, movie.title_year.indexOf("."));
        li.textContent = movie.movie_title + "(" + movie.director_name + ", " + movieYear + ", " + hours + ":" + mins + ")";
        li2.textContent = li.textContent;
        li.setAttribute("minutes", movie.duration);
        li2.setAttribute("minutes", movie.duration);
        if (li.status && li2.status) {
            li.classList.add("active");
            li2.classList.add("active");
        } else {
            li.classList.add("inactive");
        }
        ul.append(li);
        addMovie(li, li2);
    });
};

// Add movie takes both list items and adds event listeners to them.
// The first list item is the one in the database and it's event listener
// checks to see if it has been clicked. When it has, it toggles its classList,
// active which reformats the color and size of clicked items. A conditional
// statement determines the status of the element, and adds or removes the second
// list item to the queue list. The second is just a clone of the first to be added
// to the new list. Update info is then given this item.
// The second item also has an event listener which toggles the status of list
// item one when it is clicked. This prevents miscommunication between the two
// lists and enables a smooth transition when clicked. Finally the item is removed
// from the queue and updateInfo is given this item.
"use strict";
function addMovie(li, li2) {
    li.addEventListener("click", (e) => {
        li.classList.toggle("active");
        li.classList.toggle("inactive");
        let active = li.classList;
        if (active.contains("inactive")) {
            ol.removeChild(li2);
        } else {
            ol.append(li2);
        }
        updateInfo(li);
    });
    li2.addEventListener("click", (e) => {
        li.classList.toggle("inactive");
        li.classList.toggle("active");
        ol.removeChild(li2);
        updateInfo(li2);
    });
}

// Update Info takes a given "movie", via a list item and updates the queue
// info section. First the length of the queue is found with a quick .length call
// to the ordered list. Then a conditional statement checks to see if the provided
// movie is set to active. If it is then that means the movie is in the queue and
// its duration needs to be added to the total. If not then the movie's duration
// is removed from the total. Previously, addToPage() gave each of these elements
// a minutes hidden data. This is used for calculating duration.
// Divide and mod operators calculate the HH:MM format. Finally this info is updated
// in the "counter" paragraph.
"use strict";
function updateInfo(li) {
    const length = ol.getElementsByTagName("li").length;
    const time = parseInt(li.getAttribute("minutes"));
    const active = li.classList.contains("active");
    if (active) {
        totalTime += time;
    } else {
        totalTime -= time;
    }
    const mins = (parseInt(totalTime) % 60);
    const hours = ((parseInt(totalTime) - (parseInt(totalTime) % 60)) / 60);
    document.getElementById("counter").innerHTML = "# of Movies: " + length + "<br>Watch Time: " + hours + ":" + mins;
}

// Search contains the functionality for the search bar. Some variables are defined
// for necessary information. The input of the actual search bar is grabbed. It is then
// converted to lower case for ease of use. A for loop cycles through every element in
// the movie database list. The textContent of each is grabbed. If both the search input and item
// are equal to each other, the list item is scrolled into view and a yellow highlight is
// added. Otherwise the format of each element is set back to normal.
"use strict";
function search() {
    let input = document.getElementById("searchbar");
    let search = input.value.toLowerCase();
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        let text = li[i].textContent.toLowerCase();
        if (search && text.includes(search)) {
            li[i].scrollIntoView();
            li[i].style.backgroundColor = "yellow";
        } else {
            li[i].style.backgroundColor = "transparent";
        }
    }
}