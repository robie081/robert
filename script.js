
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
    });
});

// Main
// Timeless Wisdom Section

const time = document.querySelector('.time');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');

let opacity = 0.8;

const opacityOn = () => {
    if (opacity === 0.8) {
        time.style.opacity = '1';
        // buttons.style.display = 'block';
        buttons.style.visibility = 'visible';
        text.style.opacity = '1';
        opacity = 1;
    } else {
        time.style.opacity = '0.8';
        // buttons.style.display = 'none';
        buttons.style.visibility = 'hidden';
        text.style.opacity = '0';
        opacity = 0.8;
    } 
}

time.addEventListener('click', opacityOn);
buttons.addEventListener('click', opacityOn);


// Wit Section

const wit = document.querySelector('.wit');
const buttonsWit = document.querySelector('.buttonsWit');
const textWit = document.querySelector('.textWit');

const opacityWit = () => {
    if (opacity === 0.8) {
        wit.style.opacity = '1';
        // buttons.style.display = 'block';
        buttonsWit.style.visibility = 'visible';
        textWit.style.opacity = '1';
        opacity = 1;
    } else {
        wit.style.opacity = '0.8';
        // buttons.style.display = 'none';
        buttonsWit.style.visibility = 'hidden';
        textWit.style.opacity = '0';
        opacity = 0.8;
    } 
}

wit.addEventListener('click', opacityWit);
buttonsWit.addEventListener('click', opacityWit);


// Iterate over Children of div

// const clickProject = () => {
//     const projectsTime = document.querySelector('.time');
//     console.log(projectsTime);
//     let divKids = projectsTime.children;
//     console.log(divKids);

//     for (let i = 0; i < divKids.length; i++) {
//         console.log(divKids[i]);
//     }
// }
// clickProject();


// The Pain

// const myBody = document.querySelector('body');
// myBody.addEventListener('click', () => {
//     time.style.opacity = '1';
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