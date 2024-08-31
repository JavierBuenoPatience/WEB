document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave al hacer clic en los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Redirección al formulario de Typeform al hacer clic en "¡Solicita información!"
    const solicitaInfoBtn = document.getElementById('solicita-info-btn');
    solicitaInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://qz232a8zljw.typeform.com/to/AHskzuV5';
    });

    // Animación de entrada para las imágenes
    const images = document.querySelectorAll('.inicio-image, .features li img');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });

    // Redirección al enlace de inicio de sesión
    const loginRedirectBtn = document.querySelector('.login-btn');
    loginRedirectBtn.addEventListener('click', function() {
        window.location.href = 'https://javierbuenopatience.github.io/chatgpt-web/#';
    });
});
