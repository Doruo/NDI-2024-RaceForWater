// script.js

// Attacher des événements aux images cliquables
document.addEventListener('DOMContentLoaded', () => {
    const clickableImages = document.querySelectorAll('.clickable');
    
    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            const url = image.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Redirection vers une autre page
            }
        });

        // Positionnement aléatoire pour le décor
        image.style.top = Math.random() * 80 + '%'; // Limite pour éviter la sortie hors écran
        image.style.left = Math.random() * 80 + '%';
    });
});
