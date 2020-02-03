const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games/`;
const detailsUrl = `${gamesUrl}${id}`;

fetch(detailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

function createDetails(details) {
    console.dir(details);

    const container = document.querySelector(".container");

    const loader = document.querySelector(".loader");
    container.removeChild(loader);

    const heading = document.createElement("h1");
    heading.className = "details-title";
    const headingContent = document.createTextNode(details.name);
    heading.appendChild(headingContent);

    container.appendChild(heading);

    const backgroundImage = document.createElement("div");
    backgroundImage.className = "details-image";
    backgroundImage.style.backgroundImage = `url("${details.background_image}")`;

    container.appendChild(backgroundImage);

    const description = document.createElement("div");
    description.className = "details-description";
    description.innerHTML = details.description;

    container.appendChild(description);

    const genres = document.createElement("div");
    genres.className = "details-genres";
    genres.innerHTML = makeGenres(details.genres);

    container.appendChild(genres);

    const releaseDate = document.createElement("time");
    releaseDate.className = "details-date";
    releaseDate.innerText = `Released: ${details.released}`;

    description.before(releaseDate);
}
