/* ============================================
   DOM Utilities — dom.js
   Extended with advanced animation handling.
   ============================================ */

export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

/**
 * Advanced Scroll Observer
 * Supports individual element triggers and staggered group reveals.
 */
export function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Handle staggered children if group
                if (el.hasAttribute('data-stagger-group')) {
                    const children = qsa('[data-stagger-item]', el);
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${(index + 1) * 100}ms`;
                        child.classList.add('visible');
                    });
                } else {
                    el.classList.add('visible');
                }

                observer.unobserve(el);
            }
        });
    }, observerOptions);

    // Track elements with [data-animate]
    qsa('[data-animate]').forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });
}

/**
 * Smooth Scrolling for Anchor Links
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
            const headerHeight = qs('.header')?.offsetHeight || 0;
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL hash without jump
            history.pushState(null, null, targetId);
        }
    });
}
