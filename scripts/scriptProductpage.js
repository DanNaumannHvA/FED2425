// Slideshow
const slides = document.querySelectorAll('section:nth-of-type(2) > ul:nth-of-type(1) li');
const dots = document.querySelectorAll('section:nth-of-type(2) > ul:nth-of-type(2) li');

showSlide(0);

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.setAttribute('data-visible', 'false');
    });
    
    dots.forEach(function(dot) {
        dot.setAttribute('data-visible', 'false');
    });
    
    slides[index].setAttribute('data-visible', 'true');
    slides[index].classList.add('fade');
    dots[index].setAttribute('data-visible', 'true');
    dots[index].classList.add('fade');
}

dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        showSlide(index);
    });
});

// Burger menu 

const menuButton = document.querySelector('header button');
const closeButton = document.querySelector('nav button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', function() {
    nav.classList.add('open');
});

closeButton.addEventListener('click', function() {
    nav.classList.remove('open');
});

// Sidescroll Maak de look af
const scrollContainer1 = document.querySelector('section:nth-of-type(7) ul');
const prevButton1 = document.querySelector('section:nth-of-type(7) button:nth-of-type(1)');
const nextButton1 = document.querySelector('section:nth-of-type(7) button:nth-of-type(2)');

nextButton1.addEventListener('click', function() {
    scrollContainer1.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton1.addEventListener('click', function() {
    scrollContainer1.scrollBy({ left: -300, behavior: 'smooth' }); 
});

// Sidescroll Misschien vind je dit ook leuk
const scrollContainer2 = document.querySelector('section:nth-of-type(8) ul');
const prevButton2 = document.querySelector('section:nth-of-type(8) button:nth-of-type(1)');
const nextButton2 = document.querySelector('section:nth-of-type(8) button:nth-of-type(2)');

nextButton2.addEventListener('click', function() {
    scrollContainer2.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton2.addEventListener('click', function() {
    scrollContainer2.scrollBy({ left: -300, behavior: 'smooth' });
});

