const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: 'bottom'});
sr.reveal('.hero-img', {delay: 200, origin: 'right'});
sr.reveal('.icons', {delay: 550, origin: 'left'});
sr.reveal('header', {delay: 300, origin: 'top'});