const hamburgerCard = document.querySelector(".hamburger-card");
const hamburgerIcon = document.querySelector(".hamburger");
// Henter html elementer og gemmer dem i var


hamburgerIcon.addEventListener("click", function () {
  hamburgerCard.classList.toggle("open");
});
// Åbner hamburger når "Clicked" er aktiv

window.addEventListener("click", function (event) {
  if (
    !event.target.closest(".hamburger-card") &&
    hamburgerCard.classList.contains("open")
  ) {
    hamburgerCard.classList.remove("open");
  }
});
// Lukker hamburger når enden trykket igen eller udenfor elementet


document.addEventListener("touchstart", function() {}, true);
// Tilhøre ikke hamburger, dette er for at Hover fungere på mobile view. Hover funktion fungere kun på web men med den her virker det også på mobil