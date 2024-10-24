// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById('contactForm').reset(); // Clear the form
    }
});
