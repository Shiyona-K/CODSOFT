window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Simple Fade-In effect for Hero
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
// Form Submission with Reset Logic
const form = document.querySelector('.floating-form');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalBtnText = btn.innerText;
    
    // 1. Show "Sending" state
    btn.innerText = 'Sending...';
    btn.disabled = true; // Prevent double clicks
    
    setTimeout(() => {
        // 2. Show Success state
        btn.style.background = '#22c55e'; // Success green
        btn.innerText = 'Proposal Sent!';

        // 3. Reset the form fields
        form.reset();

        // 4. Return button to normal after 3 seconds
        setTimeout(() => {
            btn.style.background = 'var(--accent)';
            btn.innerText = originalBtnText;
            btn.disabled = false;
        }, 3000);

    }, 1500);
});