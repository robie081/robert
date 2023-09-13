
// Hamburger Toggle

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('change');
});

// Menu Toggle

const header = document.querySelector('header');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    header.classList.toggle('open');
    ul.classList.toggle('open');
});

// Toggle Initial Top

const main = document.querySelector('main');

btn.addEventListener('click', () => {
    main.classList.toggle('position');
});