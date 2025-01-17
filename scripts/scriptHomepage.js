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


// Sidescroll buttons Korting
const scrollContainer1 = document.querySelector('section:nth-of-type(2) ul');
const prevButton1 = document.querySelector('section:nth-of-type(2) button:nth-of-type(1)');
const nextButton1 = document.querySelector('section:nth-of-type(2) button:nth-of-type(2)');

nextButton1.addEventListener('click', function() {
    scrollContainer1.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton1.addEventListener('click', function() {
    scrollContainer1.scrollBy({ left: -300, behavior: 'smooth' }); 
});

// Sidescroll buttons Net uit
const scrollContainer2 = document.querySelector('section:nth-of-type(3) ul');
const prevButton2 = document.querySelector('section:nth-of-type(3) button:nth-of-type(1)');
const nextButton2 = document.querySelector('section:nth-of-type(3) button:nth-of-type(2)');

nextButton2.addEventListener('click', function() {
    scrollContainer2.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton2.addEventListener('click', function() {
    scrollContainer2.scrollBy({ left: -300, behavior: 'smooth' });
});

// Sidescroll buttons Shop onze iconen
const scrollContainer3 = document.querySelector('section:nth-of-type(4) ul');
const prevButton3 = document.querySelector('section:nth-of-type(4) button:nth-of-type(1)');
const nextButton3 = document.querySelector('section:nth-of-type(4) button:nth-of-type(2)');

nextButton3.addEventListener('click', function() {
    scrollContainer3.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton3.addEventListener('click', function() {
    scrollContainer3.scrollBy({ left: -300, behavior: 'smooth' });
});

// Sidescroll buttons Ontdek meer
const scrollContainer4 = document.querySelector('section:nth-of-type(5) ul');
const prevButton4 = document.querySelector('section:nth-of-type(5) button:nth-of-type(1)');
const nextButton4 = document.querySelector('section:nth-of-type(5) button:nth-of-type(2)');

nextButton4.addEventListener('click', function() {
    scrollContainer4.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton4.addEventListener('click', function() {
    scrollContainer4.scrollBy({ left: -300, behavior: 'smooth' });
});

// Sidescroll buttons Nike Membership
const scrollContainer5 = document.querySelector('section:nth-of-type(6) ul');
const prevButton5 = document.querySelector('section:nth-of-type(6) button:nth-of-type(1)');
const nextButton5 = document.querySelector('section:nth-of-type(6) button:nth-of-type(2)');

nextButton5.addEventListener('click', function() {
    scrollContainer5.scrollBy({ left: 300, behavior: 'smooth' }); 
});

prevButton5.addEventListener('click', function() {
    scrollContainer5.scrollBy({ left: -300, behavior: 'smooth' });
});