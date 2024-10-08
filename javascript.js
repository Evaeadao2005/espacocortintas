const carrosselOfertas = document.getElementById('carrossel-ofertas');
const carrosselPromocoes = document.getElementById('carrossel-promocoes-fixas');
const scrollAmount = 210; // Ajuste conforme necessário
const scrollInterval = 3000; // Tempo entre as rolagens

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
