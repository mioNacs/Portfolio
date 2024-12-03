// Smooth Scroll with Offset for Sticky Header
document.querySelectorAll('.nav-links a',).forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight;
        const topPosition = target.offsetTop - headerHeight;

        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    });
});

document.querySelectorAll('.cta-button',).forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight;
        const topPosition = target.offsetTop - headerHeight;

        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    });
});

// Shrink Header on Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Highlight Active Section in Navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const offset = document.querySelector('header').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form Validation for Contact Section
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields before submitting.');
        }
    });
};
