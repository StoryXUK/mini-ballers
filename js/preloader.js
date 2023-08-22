  // Immediately show the preloader
  document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.remove("loaded");
  });

  // Hide the preloader after 1 second or when the site is fully loaded
  window.addEventListener("load", function() {
    setTimeout(function() {
      document.body.classList.add("loaded");
    }, 1000); // 1000 milliseconds (1 second) loading time
  });