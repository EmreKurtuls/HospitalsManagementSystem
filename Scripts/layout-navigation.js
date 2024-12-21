function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href').endsWith(currentPage)) {
            link.classList.add('active');
        }
    });
}

// Function to navigate to the home page when the logo is clicked
function goToHome() {
    window.location.href = '/Home';
}

// Initialize scripts on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
});