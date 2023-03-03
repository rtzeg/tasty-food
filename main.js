function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}


showMenu('nav-toggle', 'nav-menu')

// remove menu mobile

const navlink = document.querySelectorAll('.nav__link');

function lineAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navlink.forEach(n => n.addEventListener('click', lineAction));

// //scroll section active link

// const section = document.querySelectorAll('section[id]');


// window.addEventListener('scroll', console.log(window));

