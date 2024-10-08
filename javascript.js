let currentIndex = 0;

function moveSlide(direction) {
    const ofertas = document.querySelectorAll('.oferta');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = ofertas.length - 1;
    } else if (currentIndex >= ofertas.length) {
        currentIndex = 0;
    }

    ofertas.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Inicializar carrossel
document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0);
});

// Ação ao clicar no botão de contato
document.getElementById("contato-button").onclick = function() {
    document.getElementById("popup").classList.toggle("popup-hidden");
};

// Ação para fechar o popup
document.querySelector(".close").onclick = function() {
    document.getElementById("popup").classList.add("popup-hidden");
};

// Fechar popup ao clicar fora dele
window.onclick = function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").classList.add("popup-hidden");
    }
};
