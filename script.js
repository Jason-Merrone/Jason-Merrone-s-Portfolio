
// JS to make the navbar non see-through and remove the bottom left buttons when user scrolls down
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var navbarOffset = navbar.offsetTop;
    var scrollButtons = document.getElementById("scroll-buttons");
  
    if (window.pageYOffset > navbarOffset) {
      navbar.classList.add("navbar-scroll");
      scrollButtons.classList.add("hide-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
      scrollButtons.classList.remove("hide-scroll");
    }
  });