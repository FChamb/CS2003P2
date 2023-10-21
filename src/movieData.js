const url = "../data/movie_metadata_subset.json";
const movieDataBase = document.querySelector(".movieDataBase");
const divider = document.createElement("div");
const ul = document.getElementById("database");
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
//    ul.addEventListener("click", (e) => {
//        let li = ol.getElementsByTagName("li");
//        let valid = false;
//        for (let i = 0; i < li.length; i++) {
//            if (li[i].textContent == e.target.textContent) {
//                valid = true;
//            }
//        }
//        if (!valid) {
//            ol.appendChild(e.target.cloneNode(true));
//        } else {
//            e.target.remove();
//        }
//    });
    data.forEach((movie) => {
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        const mins = (parseInt(movie.duration) % 60);
        const hours = ((parseInt(movie.duration) - (parseInt(movie.duration) % 60)) / 60);
        li.textContent = movie.movie_title + "(" + movie.director_name + ", " + movie.title_year + ", " + hours + ":" + mins + ")";
        li2.textContent = li.textContent;
        if (li.status) {
            li.classList.add("active");
        } else {
            li.classList.add("inactive");
        }
        ul.append(li);
        addMovie(li, li2);
    });
};

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
//    li2.addEventListener("click", (e) => {
//        li.classList.toggle("inactive");
//        li.classList.toggle("active");
//        ol.removeChild(li2);
//        });
    });
}

function search() {
    let input = document.getElementById("searchbar");
    let search = input.value.toLowerCase();
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        let text = li[i].textContent.toLowerCase().substring(0, li[i].textContent.indexOf("(") - 1);
        if (search && text.includes(search)) {
            li[i].scrollIntoView();
            li[i].style.backgroundColor = "yellow";
        } else {
            li[i].style.backgroundColor = "transparent";
        }
    }
}