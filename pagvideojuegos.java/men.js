document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.getElementById('dropdown-content');

    // Función para mostrar el menú desplegable
    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    // Función para ocultar el menú desplegable cuando el ratón sale
    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });
});
