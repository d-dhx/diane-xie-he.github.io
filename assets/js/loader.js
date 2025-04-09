window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  }, 5000);
});
