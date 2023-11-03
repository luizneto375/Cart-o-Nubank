const card = document.querySelector(".container");

card.addEventListener("mouseout", cardMovimneto);

function cardMovimneto(event) {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centroPaginaX = card.offsetLeft + cardWidth / 2;
    const centroPaginaY = card.offsetTop + cardHeight / 2;
    const posicaoMouseX = event.clientX - centroPaginaX;
    const posicaoMouseY = event.clientY - centroPaginaY;
    

    const rotateX = (25 * posicaoMouseY / (cardHeight / 2)).toFixed(2);

    const rotateY = (25 * posicaoMouseX / (cardWidth / 2)).toFixed(2);

    document.querySelector("h2").innerHTML = rotateX;
    document.querySelector("h3").innerHTML = rotateY;

    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
   
   
    
    
    
}