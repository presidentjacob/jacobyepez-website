'use strict';

const slides = document.querySelectorAll('.project-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

// Show first slide on load
showSlide(current);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent reload
        status.textContent = "Sending...";
        status.style.color = "black";

        // Here you can integrate email sending
    });
});
// const switcher = document.querySelector('.btn');

// switcher.addEventListener('click', function() {
//     document.body.classList.toggle('light-theme');
//     document.body.classList.toggle('dark-theme');

//     const className = document.body.className;
//     if(className == "light-theme") {
//         this.textContent = "Dark";
//     } else {
//         this.textContent = "Light";
//     }

//     console.log('current class name: ' + className);
// });