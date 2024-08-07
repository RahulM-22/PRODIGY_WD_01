document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#333';
            this.style.backgroundColor = '#fff';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#fff';
            this.style.backgroundColor = 'transparent';
        });
    });
});
