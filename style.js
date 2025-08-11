// Navigation smooth scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = target.offsetTop - 60;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});