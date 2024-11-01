
function main() {

    const hamburgerButton = document.querySelector('.nav-hamburger-button-root');
    const hamburger = document.querySelector('.nav-hamburger-button-inner');

    // const body = document.body;
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');

    hamburgerButton.addEventListener('click', () => {

        hamburger.classList.toggle('isExpanded');
        // console.log('isExpanded');

        // No scroll for cross when menu is open

        if (hamburger.classList.contains('isExpanded')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    // Remove menu on click of main

    main.addEventListener('click', () => {

        hamburger.classList.remove('isExpanded');
        nav.classList.remove('active');
        body.classList.remove('no-scroll');
    });

    // Precious -- Hover over pseudo elements like ::after and ::before

    hamburgerButton.addEventListener('mouseover', () => {
        // hamburger.classList.toggle('isHovered');
        hamburger.classList.add('isHovered');
        // console.log('mouse over');
    });

    hamburgerButton.addEventListener('mouseout', () => {
        // hamburger.classList.toggle('isHovered');
        hamburger.classList.remove('isHovered');
        // console.log('mouse out');
    });

    hamburgerButton.addEventListener('click', () => {
        // primaryNav.classList.toggle('active');
        nav.classList.toggle('active');

    });

    const dayNight = document.querySelector('.day-night');

    const solSvg = document.getElementById('sol-svg');

    const ul = document.getElementById('social');
    // console.log(ul);
    const li = ul.querySelectorAll('.social');
    // console.log(li);

    const menuUl = document.querySelector('.primary-navigation');
    const menuLi = menuUl.querySelectorAll('.color');

    dayNight.addEventListener('click', () => {
        body.classList.toggle('light');
        hamburger.classList.toggle('dark');

        // console.log(solSvg.style.fill);

        if (solSvg.style.fill === '') {
            // solSvg.style.fill = '#f9f4da';
            solSvg.style.fill = '#111827';
        } else {
            solSvg.style.fill = '';
        }

        for (let item of li) {
            let a = item.getElementsByTagName('a')[0];
            a.classList.toggle('dark-color');
        }

        nav.classList.toggle('light');

        for (let item of menuLi) {
            let menuItem = item.getElementsByTagName('a')[0];
            // console.log(menuItem);
            menuItem.classList.toggle('dark-color');
        }
    });
}

main();