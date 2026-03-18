/* ============================================
   App Bootstrap — main.js
   Phase 4: Interactions & Animations.
   ============================================ */

import { qs, initScrollAnimations, initSmoothScroll } from './utils/dom.js';
import { ProjectList } from './components/ProjectList.js';
import { SkillList } from './components/SkillList.js';
import { Experience } from './core/Experience.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Components
    const projectTarget = qs('#projects-target');
    const skillTarget = qs('#skills-target');

    if (projectTarget) {
        new ProjectList(projectTarget).mount();
    }

    if (skillTarget) {
        new SkillList(skillTarget).mount();
    }

    // 2. Core Systems
    initScrollAnimations();
    initSmoothScroll();
    initMobileMenu();

    // 3. Page Load Sequence
    setTimeout(initHeroSequence, 100);
});

/**
 * Mobile Menu Toggle Logic
 */
function initMobileMenu() {
    const toggle = qs('.navbar__toggle');
    const menu = qs('.navbar__links');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.contains('navbar__links--open');

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close on link click
    menu.addEventListener('click', (e) => {
        if (e.target.closest('.navbar__link')) {
            closeMenu();
        }
    });

    function openMenu() {
        menu.classList.add('navbar__links--open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    function closeMenu() {
        menu.classList.remove('navbar__links--open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

/**
 * Hero Entrance Sequence
 * Directly triggers animations defined in animations.css
 */
function initHeroSequence() {
    const sequence = [
        '.hero__greeting',
        '.hero__name',
        '.hero__tagline',
        '.hero__intro',
        '.hero__actions'
    ];

    sequence.forEach((selector, index) => {
        const el = qs(selector);
        if (el) {
            el.classList.add(`hero-load-${Math.min(index + 1, 4)}`);
        }
    });
}
