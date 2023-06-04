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

// JS to switch between schools on education page
const button1 = document.getElementById("education-button-1");
const button2 = document.getElementById("education-button-2");

button1.addEventListener('click', function() {
  if(document.getElementById("school-name").innerText !== `Salt Lake Community College (2021)`){
    // Fade in
    document.getElementById("education-content").classList.add('fade-out');
    setTimeout(function() {
      document.getElementById("school-name").innerText = `Salt Lake Community College (2021)`;
      document.getElementById("education-image").src = 'slcc.png';
      document.getElementById("education-bullet-point-1").innerText = `Honors AS Degree in General Studies`;
      document.getElementById("education-bullet-point-2").innerText = `Graduated early due to completing most of my degree in high school through dual enrollment`;
      
      // Fade out
      document.getElementById("education-content").classList.remove('fade-out');
    }, 300); // Wait for fade-out transition (0.3s)
  }
});

button2.addEventListener('click', function() {
  if(document.getElementById("school-name").innerText !== `Utah State University (2024 Expected)`){
    // Fade in
    document.getElementById("education-content").classList.add('fade-out');
    setTimeout(function() {
      document.getElementById("school-name").innerText = `Utah State University (2024 Expected)`;
      document.getElementById("education-image").src = 'usu.jpeg';
      document.getElementById("education-bullet-point-1").innerText = `BS in Mathematics with a Computational Mathematics Emphasis (3.5 GPA)`;
      document.getElementById("education-bullet-point-2").innerText = `Minor in Computer Science`;
      
      // Fade out
      document.getElementById("education-content").classList.remove('fade-out');
    }, 300); // Wait for fade-out transition (0.3s)
  }
});