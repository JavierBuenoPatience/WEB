document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado');
  });
});
