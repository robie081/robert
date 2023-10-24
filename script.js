
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

// List Toggle 1

// ul.addEventListener('click', () => {
//     btn.classList.toggle('change');
//     header.classList.toggle('open');
//     ul.classList.toggle('open');
// });

// List Toggle 2

const listItems = document.querySelectorAll('ul li');
// console.log(listItems);
listItems.forEach((item, index) => {
    item.addEventListener('click', e => {
        // e.preventDefault();
        // console.log(listItems[index]);
        btn.classList.toggle('change');
        header.classList.toggle('open');
        ul.classList.toggle('open');
    })
});

// location.reload();

// window.addEventListener('reload', () => {
//     window.location = 'http://127.0.0.1:5500/robert/index.html';
// });

// // Vertical Bar in Front of Menu Items

// // Get all list items and their associated links
// const listItems = document.querySelectorAll('ul li');
// const links = document.querySelectorAll('ul li a');

// // Add a click event listener to each link
// links.forEach((link, index) => {
//   link.addEventListener('click', (event) => {
//     // Prevent the default link behavior
//     event.preventDefault();
    
//     // Remove the "active" class from all list items
//     listItems.forEach((item) => {
//       item.classList.remove('active');
//     });

//     // Add the "active" class to the clicked list item
//     listItems[index].classList.add('active');
//   });
// });


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