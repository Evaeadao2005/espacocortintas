const carrosselOfertas = document.getElementById('carrossel-ofertas');
const carrosselPromocoes = document.getElementById('carrossel-promocoes-fixas');
const scrollAmount = 210;
const scrollInterval = 3000;

// Função para rolar automaticamente
function autoScroll(element) {
    element.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Iniciar a rolagem automática dos carrosséis
setInterval(() => autoScroll(carrosselOfertas), scrollInterval);
setInterval(() => autoScroll(carrosselPromocoes), scrollInterval);

// Ação ao clicar no botão de contato
document.getElementById("contato-button").onclick = function() {
    document.getElementById("popup").classList.toggle("popup-hidden");
};

// Ação para fechar o popup
document.querySelector(".close").onclick = function() {
    document.getElementById("popup").classList.add("popup-hidden");
};

// Adicionando evento para fechar o popup ao clicar fora dele
window.onclick = function(event) {
    if (event.target === document.getElementById("popup")) {
        document.getElementById("popup").classList.add("popup-hidden");
    }
};
