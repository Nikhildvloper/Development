// Simple script for interactivity, currently no advanced features
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Navigating to: ${this.textContent}`);
        });
    });
});
