function loadGames(json) {
    const games = json.results;

    const container = document.querySelector(".results");
    let newHTML = "";

    for (let i = 0; i < games.length; i++) {
        let ratingValue = "Not rated";

        if (games[i].rating) {
            ratingValue = games[i].rating;
        }

        const genres = games[i].genres;
        const genresHTML = makeGenres(genres);

        const platforms = games[i].platforms;
        const platformsHTML = makePlatforms(platforms);

        const details = `<div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card">
                                <div class="image" style="background-image: url(${games[i].background_image});"></div>
                                <div class="details">
                                    <h4 class="name">${games[i].name}</h4>
                                    <div class="rating">${ratingValue}</div>
                                    ${genresHTML}
                                    <div class="platforms">${platformsHTML}</div>
                                </div>
                            </div>
                        </div>`;

        newHTML += details;
    }

    container.innerHTML = newHTML;
}

function makeGenres(genreArray) {
    let genreHTML = "";

    genreArray.forEach(function(genre) {
      let activeClass = "";

      if (genres === genre.slug){
        activeClass = "active";
      }
        genreHTML += `<a class="genre ${activeClass}" href="index.html?genres=${genre.slug}">${genre.name}</a>`;

    });

    return genreHTML;
}

function makePlatforms(platformsArray) {
    let platformsHTML = "";

    for (let i = 0; i < platformsArray.length; i++) {
        platformsHTML += `<span>${platformsArray[i].platform.name}</span>`;
    }

    return platformsHTML;
}
