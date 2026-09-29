document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section[id]');

    const setActiveLink = () => {
        let current = 'home';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 160 && rect.bottom >= 160) {
                current = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${current}`);
        });
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink, { passive: true });
});
