/* ============================================
   DOM Utilities — dom.js
   Safe, robust animation and interaction logic.
   ============================================ */

export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

/**
 * Scroll Observer with Fallback
 */
export function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('is-visible');
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    const animate = () => {
        qsa('[data-animate]:not(.animate)').forEach(el => {
            el.classList.add('animate');
            observer.observe(el);
        });
    };

    // Safety Trigger: In case observer doesn't fire or JS is slow
    setTimeout(() => {
        qsa('[data-animate]:not(.is-visible)').forEach(el => {
            el.classList.add('is-visible');
        });
    }, 3000);

    animate();
    document.addEventListener('componentUpdate', animate);
}

/**
 * Smooth Scroll
 */
export function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const targetEl = qs(targetId);
        if (targetEl) {
            e.preventDefault();
            const headerHeight = qs('.navbar')?.offsetHeight || 0;
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            history.pushState(null, null, targetId);
        }
    });
}
