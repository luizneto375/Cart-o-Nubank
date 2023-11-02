const card = document.querySelector(".container");

card.addEventListener("mousemove", cardMovimneto);

function cardMovimneto() {
    const cardWidth = card.offsetWidth;
    document.querySelector("h2").innerHTML = cardWidth;
}