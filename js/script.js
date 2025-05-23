/* ***************** toggle icon navbar ******************* */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};        

/* ***************** Scroll sections active link ******************* */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ***************** Sticky Header ******************* */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ***************** remove toggle icon and navbar when click navbar link (scroll) ******************* */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* ***************** Scroll Reveal ******************* */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.education-row, .skills-row', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ***************** Typed JS  ******************* */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Data Analyst', 'SQL Developer'], 
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
});


/* ***************** dark/light mode  ******************* */
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};



