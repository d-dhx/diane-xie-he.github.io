// Add hover pop effect
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".course-card");
  
    cards.forEach((card) => {
      // Optional: click to toggle details
      card.addEventListener("click", function () {
        toggleDetails(card);
      });
  
      // Optional: hover animation
      card.addEventListener("mouseenter", function () {
        card.classList.add("hovered");
      });
  
      card.addEventListener("mouseleave", function () {
        card.classList.remove("hovered");
      });
    });
  });
  
  function toggleDetails(card) {
    const details = card.querySelector(".course-details");
    if (details) {
      if (
        details.style.display === "none" ||
        details.style.display === ""
      ) {
        details.style.display = "block";
      } else {
        details.style.display = "none";
      }
    }
  }
  