const carrossel = document.querySelector('.carrossel-ofertas');
let scrollAmount = 0;

function scrollLeft() {
    scrollAmount -= 150; // Ajuste conforme necessário
    carrossel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

function scrollRight() {
    scrollAmount += 150; // Ajuste conforme necessário
    carrossel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}

// Adicione botões de navegação se desejar
const btnLeft = document.createElement('button');
btnLeft.textContent = '←';
btnLeft.onclick = scrollLeft;
carrossel.parentElement.insertBefore(btnLeft, carrossel);

const btnRight = document.createElement('button');
btnRight.textContent = '→';
btnRight.onclick = scrollRight;
carrossel.parentElement.appendChild(btnRight);

document.getElementById("contato-button").onclick = function() {
    document.getElementById("popup").classList.toggle("popup-hidden");
};

document.querySelector(".close").onclick = function() {
    document.getElementById("popup").classList.add("popup-hidden");
};
