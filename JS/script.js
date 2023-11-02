const card = document.querySelector(".container");

card.addEventListener("mousemove", cardMovimneto);

function cardMovimneto() {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centroPagina = card.offsetLeft;
    document.querySelector("h2").innerHTML = centroPagina;
    
    
}