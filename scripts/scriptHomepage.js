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