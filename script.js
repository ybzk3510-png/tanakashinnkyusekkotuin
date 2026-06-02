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

// 後で追加

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const faqItem = question.parentElement;

    faqItem.classList.toggle("active");

  });

});

