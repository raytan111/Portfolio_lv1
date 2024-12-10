
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scroll para los links del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--bg-color)';
        navbar.style.backdropFilter = 'none';
    }
});

// Manejar el envío del formulario
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    this.reset();
});
