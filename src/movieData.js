const url = "../data/movie_metadata_subset.json";
const movieDataBase = document.querySelector(".movieDataBase");
const divider = document.createElement("div");
const ul = document.createElement("ul");
movieDataBase.append(divider);
movieDataBase.append(ul);

window.addEventListener("DOMContentLoaded", () => {
    loadData();
});

function loadData() {
    fetch(url).then(rep => rep.json()).then((data) => {
        addToPage(data);
    });
};

function addToPage(data) {
    data.forEach((movie) => {
        const li = document.createElement("li");
        const mins = (parseInt(movie.duration) % 60);
        const hours = ((parseInt(movie.duration) - (parseInt(movie.duration) % 60)) / 60);
        li.textContent = movie.movie_title + "(" + movie.director_name + ", " + movie.title_year + ", " + hours + ":" + mins + ")";
        ul.append(li);
    });
};