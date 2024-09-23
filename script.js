document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Scroll suave al hacer clic en los enlaces del menú
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
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

    // Redirección al enlace de inicio de sesión
    const loginRedirectBtn = document.querySelector('.login-btn');
    loginRedirectBtn.addEventListener('click', function() {
        window.location.href = 'https://javierbuenopatience.github.io/chatgpt-web/#';
    });

    // Funcionalidad del modal de imagen
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const images = document.querySelectorAll('.feature-image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImage.src = this.src;
        });
    });

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Carrusel de testimonios
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-carousel .testimonial');
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
        showTestimonial(testimonialIndex);
    }

    // Mostrar el primer testimonio inicialmente
    showTestimonial(testimonialIndex);

    // Cambiar testimonios cada 5 segundos
    setInterval(nextTestimonial, 5000);
});
