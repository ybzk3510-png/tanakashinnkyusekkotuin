// ====================
// gallery modal
// ====================

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach((img) => {

  img.addEventListener("click", () => {

    lightboxImg.src = img.src;

    lightbox.classList.add("active");

  });

});

lightbox.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

// ====================
// hamburger menu
// ====================

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const faqItem = question.parentElement;

    faqItem.classList.toggle("active");

  });

});

const fadeItems = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
}, {
  threshold: 0.2
});

fadeItems.forEach((item) => {
  observer.observe(item);
});