const card = document.querySelector(".container");

card.addEventListener("mousemove", cardMovimneto);

card.addEventListener("mouseleave", cardBack);

card.addEventListener("mouseenter", cardEnter); 

function cardMovimneto(event) {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centroPaginaX = card.offsetLeft + cardWidth / 2;
    const centroPaginaY = card.offsetTop + cardHeight / 2;
    const posicaoMouseX = event.clientX - centroPaginaX;
    const posicaoMouseY = event.clientY - centroPaginaY;
    

    const rotateX = (( + 1 ) * 25 * posicaoMouseY / (cardHeight / 2)).toFixed(2);

    const rotateY = (( - 1 ) * 25 * posicaoMouseX / (cardWidth / 2)).toFixed(2);

    document.querySelector("#eixoX").innerHTML = "Posição do eixo X "+ rotateX;
    document.querySelector("#eixoY").innerHTML = "Posição do eixo Y " + rotateY;

    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

function cardBack(event) {
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    
    cardTransition();
};

function cardTransition() {
    clearInterval(card.transitionId);
    card.style.transition = `transform 400ms`;
    card.transitionId = setTimeout(() => {
        card.style.transition = "";
    }, 400 );
};

function cardEnter(event) {
    cardTransition();
};