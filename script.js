function showSection(sectionId) {
  // Ocultar todas las secciones
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });

  // Mostrar la sección seleccionada
  document.getElementById(sectionId).style.display = 'block';
}

// Mostrar la sección de inicio al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  showSection('home');
});
