const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const STORAGE_KEY = 'theme-light';
function applyTheme(isLight) { body.classList.toggle('light', isLight); }
applyTheme(localStorage.getItem(STORAGE_KEY) === 'true');
themeToggle.addEventListener('click', (e) => { e.preventDefault(); const isLight = !body.classList.contains('light'); applyTheme(isLight); localStorage.setItem(STORAGE_KEY, isLight); });

/* ============================================================
   Scroll Reveal: плавное появление и свечение плашек при прокрутке
   IntersectionObserver + CSS transition.
   ============================================================ */

const revealElements = document.querySelectorAll('.section, .skills-list li, .contact-link, .project-card, .profile-photo');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
});

revealElements.forEach((el) => revealObserver.observe(el));