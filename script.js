
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

// Sticky Menu GPT

// Sticky Menu

// window.onscroll = function() {
//     myFunction();
// } 

// const navBar = document.getElementById('navbar');
// const sticky = navBar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navBar.classList.add('sticky');
//     } else {
//         navBar.classList.remove('sticky');
//     }
// }

// Toggle Initial Top

// const main = document.querySelector('main');

// btn.addEventListener('click', () => {
//     main.classList.toggle('position');
// });