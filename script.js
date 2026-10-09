const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const STORAGE_KEY = 'theme-light';
function applyTheme(isLight) { body.classList.toggle('light', isLight); }
applyTheme(localStorage.getItem(STORAGE_KEY) === 'true');
themeToggle.addEventListener('click', (e) => { e.preventDefault(); const isLight = !body.classList.contains('light'); applyTheme(isLight); localStorage.setItem(STORAGE_KEY, isLight); });

/* ============================================================
   Scroll Spy: плавное свечение плашек, когда они попадают
   в центр экрана. IntersectionObserver + CSS transition 0.6s.
   ============================================================ */

const sections = document.querySelectorAll('.section');

const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Подсвечиваем только ту секцию, что в центре viewport
            sections.forEach((sec) => sec.classList.remove('active-section'));
            entry.target.classList.add('active-section');
        } else {
            // Плавно гасим, когда секция уходит из центра
            entry.target.classList.remove('active-section');
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

sections.forEach((section) => spyObserver.observe(section));