document.addEventListener('DOMContentLoaded', (event) => {
    const contactLink = document.getElementById('contact-link');
    const contactForm = document.getElementById('contact-form');
    const closeForm = document.getElementById('close-form');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        contactForm.style.display = 'block'; // Show the contact form
    });

    closeForm.addEventListener('click', () => {
        contactForm.style.display = 'none'; // Hide the contact form
    });
});