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

    // Mostrar el modal de inicio de sesión
    const loginBtn = document.querySelector('.login-btn');
    const modal = document.querySelector('.login-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    loginBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Validación básica del formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor, complete todos los campos.');
        }
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
