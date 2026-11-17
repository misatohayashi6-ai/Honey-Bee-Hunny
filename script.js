/* Header scroll effect */

const header = document.getElementById("header");

 

window.addEventListener("scroll", () => {

  header.style.backdropFilter =

    window.scrollY > 40 ? "blur(8px)" : "none";

});

 

/* Fade in on scroll */

const fadeItems = document.querySelectorAll(".fadein");

 

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

});

 

fadeItems.forEach(item => observer.observe(item));

 



