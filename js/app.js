window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(242, 242, 246, 0.93)';
    } else {
        navbar.style.backgroundColor = 'white';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const targetID = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            
            if (targetID === '') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const navbarHeight = navbar.offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
});
