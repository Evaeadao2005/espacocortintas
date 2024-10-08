document.getElementById("contato-button").onclick = function() {
    document.getElementById("popup").classList.toggle("popup-hidden");
};

document.querySelector(".close").onclick = function() {
    document.getElementById("popup").classList.add("popup-hidden");
};
