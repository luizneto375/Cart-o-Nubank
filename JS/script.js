const card = document.querySelector(".container");

card.addEventListener("mousemove", cardMovimneto);

function cardMovimneto() {
    const cardWidth = card.offsetWidth;
    console.log(cardWidth);
}