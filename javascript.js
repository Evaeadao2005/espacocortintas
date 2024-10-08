const carrosselOfertas = document.getElementById('carrossel-ofertas');
const carrosselPromocoes = document.getElementById('carrossel-promocoes-fixas');
const scrollAmount = 210; // Ajuste conforme necessário
const scrollInterval = 3000; // Tempo entre as rolagens

function autoScroll(element) {
    element.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(() => autoScroll(carrosselOfertas), scrollInterval);
setInterval(() => autoScroll(carrosselPromocoes), scrollInterval);

document.getElementById("contato-button").onclick = function() {
    document.getElementById("popup").classList.toggle("popup-hidden");
};

document.querySelector(".close").onclick = function() {
    document.getElementById("popup").classList.add("popup-hidden");
};
