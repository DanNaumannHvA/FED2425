// Slideshow
const slides = document.querySelectorAll('section:nth-of-type(2) > ul:first-of-type li');
const dots = document.querySelectorAll('section:nth-of-type(2) > ul:last-of-type li');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active', 'fade');
    dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Show first slide initially
showSlide(0);


// Burger menu 

const menuButton = document.querySelector('header button');
const closeButton = document.querySelector('nav button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.add('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
        nav.classList.remove('open');
    }
});

