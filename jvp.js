document.addEventListener("DOMContentLoaded", function() {
    // Función para redirigir al enlace de inscripción
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Evita que el formulario se envíe
        window.location.href = "https://forms.office.com/r/fM2FuqWMxC";  // Redirige al enlace
    });
});
