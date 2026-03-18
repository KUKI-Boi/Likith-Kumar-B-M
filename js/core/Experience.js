/* ============================================
   Experience Logic — Experience.js
   Manages storytelling triggers and tracking.
   ============================================ */

import { qs } from '../utils/dom.js';

class ExperienceManager {
    constructor() {
        this.fill = qs('#path-fill');
        this.init();
    }

    init() {
        if (!this.fill) return;

        window.addEventListener('scroll', () => {
            this._updatePath();
        }, { passive: true });

        // Initial call
        this._updatePath();
    }

    /**
     * Update the vertical "Path of Progress" fill percentage.
     * @private
     */
    _updatePath() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min(100, (scrollTop / docHeight) * 100);
        
        this.fill.style.height = `${scrollPercent}%`;
    }
}

export const Experience = new ExperienceManager();
