const hamburgerCard = document.querySelector(".hamburger-card");
const hamburgerIcon = document.querySelector(".hamburger");

hamburgerIcon.addEventListener("click", function () {
  hamburgerCard.classList.toggle("open");
});

// Close menu when clicking outside
window.addEventListener("click", function (event) {
  if (
    !event.target.closest(".hamburger-card") &&
    hamburgerCard.classList.contains("open")
  ) {
    hamburgerCard.classList.remove("open");
  }
});

document.addEventListener("touchstart", function() {}, true);
// Call the function to fetch and display the Instagram feed