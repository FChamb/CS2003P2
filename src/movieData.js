const url = "../data/movie_metadata_subset.json";
const movieDataBase = document.querySelector(".movieDataBase");
const divider = document.createElement("div");
const ul = document.createElement("ul");
const movieList = document.getElementById("ul");
movieDataBase.append(divider);
movieDataBase.append(ul);

const movieQueue = document.querySelector(".movieQueue");
const queueDiv = document.createElement("div");
const ol = document.createElement("ol");
movieQueue.append(queueDiv);
movieQueue.append(ol);

window.addEventListener("load", () => {
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
        if (movie.status) {
            li.classList.add("active");
        } else {
            li.classList.add("inactive");
        }
        ul.append(li);
        li.addEventListener("click", (e) => {
            li.classList.toggle("active");
            li.classList.toggle("inactive");
        });
    });
};

function addToQueue() {
    const item = ul.getElementsByTagName("li");
    for (let i = 0; i < item.length; i++) {
        const li = document.createElement("li");
        if (item[i].classList.st) {
            console.log(ul[i]);
            li.textContent = ul[i];
        }
    }
}