/* ============================================
   App Bootstrap — main.js
   Premium portfolio with dynamic components.
   ============================================ */

import { qs, initScrollAnimations, initSmoothScroll } from './utils/dom.js';
import { ProjectList } from './components/ProjectList.js';
import { SkillList } from './components/SkillList.js';
import { Experience } from './core/Experience.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mount Dynamic Components
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

    // 3. Hero Entrance Sequence (slight delay for paint)
    requestAnimationFrame(() => {
        setTimeout(initHeroSequence, 200);
    });
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = qs('.navbar__toggle');
    const menu = qs('.navbar__links');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.contains('navbar__links--open');
        isOpen ? closeMenu() : openMenu();
    });

    // Close menu on link click
    menu.addEventListener('click', (e) => {
        if (e.target.closest('.navbar__link')) closeMenu();
    });

    function openMenu() {
        menu.classList.add('navbar__links--open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menu.classList.remove('navbar__links--open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

/**
 * Hero Entrance — triggers CSS transitions via class addition.
 * Uses data-animate-hero elements with staggered delays in animations.css.
 */
function initHeroSequence() {
    const elements = document.querySelectorAll('[data-animate-hero]');
    elements.forEach(el => el.classList.add('hero-loaded'));
}
