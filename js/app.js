window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(242, 242, 246, 0.93)';
    } else {
        navbar.style.backgroundColor = 'white';
    }
});