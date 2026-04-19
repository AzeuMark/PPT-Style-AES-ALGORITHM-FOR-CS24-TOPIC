/* ===== AES Presentation — Main Navigation ===== */

const TOTAL_SLIDES = 13;

const SLIDE_FOLDERS = [
    'slide01-title',
    'slide02-what-is-aes',
    'slide03-history',
    'slide04-rounds',
    'slide05-state-array',
    'slide06-add-round-key',
    'slide07-subbytes',
    'slide08-shiftrows',
    'slide09-mixcolumns',
    'slide10-final-round',
    'slide11-key-expansion-decryption',
    'slide12-why-aes-matters',
    'slide13-summary'
];

let currentSlide = 0;
let isTransitioning = false;

const container = document.getElementById('slide-container');
const counter = document.getElementById('slide-counter');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

/* ---------- slide loader ---------- */
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.id = 'slide-js';
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
    });
}

async function loadSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    /* fade out */
    container.classList.add('fade-out');
    await wait(350);

    /* remove old slide CSS & script */
    const oldCSS = document.getElementById('slide-css');
    if (oldCSS) oldCSS.remove();
    const oldJS = document.getElementById('slide-js');
    if (oldJS) oldJS.remove();
    window.__slideHTML = null;

    const folder = SLIDE_FOLDERS[index];

    /* inject CSS (works on both http:// and file://) */
    const link = document.createElement('link');
    link.id = 'slide-css';
    link.rel = 'stylesheet';
    link.href = `slides/${folder}/style.css`;
    document.head.appendChild(link);

    /* load script which sets window.__slideHTML */
    try {
        await loadScript(`slides/${folder}/script.js`);
        container.innerHTML = window.__slideHTML || `<div class="slide"><h1>Slide not found</h1></div>`;
    } catch (e) {
        container.innerHTML = `<div class="slide"><h1>Slide not found</h1></div>`;
    }

    /* update state */
    currentSlide = index;
    counter.textContent = `${index + 1} / ${TOTAL_SLIDES}`;
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === TOTAL_SLIDES - 1;

    /* fade in */
    await wait(50);
    container.classList.remove('fade-out');
    isTransitioning = false;
}

/* ---------- navigation ---------- */
function nextSlide() {
    if (currentSlide < TOTAL_SLIDES - 1) loadSlide(currentSlide + 1);
}

function prevSlide() {
    if (currentSlide > 0) loadSlide(currentSlide - 1);
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

/* ---------- nav toggle ---------- */
const btnToggle = document.getElementById('btn-toggle-nav');
const navBar = document.getElementById('nav-bar');
const eyeOpen = document.getElementById('eye-open');
const eyeClosed = document.getElementById('eye-closed');

btnToggle.addEventListener('click', () => {
    const hidden = navBar.classList.toggle('nav-hidden');
    eyeOpen.style.display = hidden ? 'none' : 'block';
    eyeClosed.style.display = hidden ? 'block' : 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
});

/* ---------- helpers ---------- */
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ---------- init ---------- */
loadSlide(0);
