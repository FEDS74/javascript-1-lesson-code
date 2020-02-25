const genreLinks = document.querySelectorAll(".genres a");

function loadPage() {
    const genre = this.dataset.genre;
    const pageToReload = "index.html?genres=" + genre;

    document.location.href = pageToReload;
}

genreLinks.forEach(link => {

    if (genres === link.dataset.genre) {
        link.classList.add("active");
    }
    link.addEventListener("click", loadPage);
});
