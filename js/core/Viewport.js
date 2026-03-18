/* ============================================
   Viewport — Viewport.js
   Utility to track viewport size and
   current breakpoint reactively.
   ============================================ */

import { CONFIG } from '../config.js';

class ViewportManager {
    constructor() {
        this._currentBreakpoint = this._getBreakpoint();
        /** @type {Set<Function>} */
        this._listeners = new Set();

        this._onResize = this._onResize.bind(this);
        window.addEventListener('resize', this._debounce(this._onResize, 150));
    }

    /**
     * Get the current breakpoint name.
     * @returns {'MOBILE'|'TABLET'|'DESKTOP'|'LARGE'}
     */
    getBreakpoint() {
        return this._currentBreakpoint;
    }

    /**
     * Get the current viewport width.
     * @returns {number}
     */
    getWidth() {
        return window.innerWidth;
    }

    /**
     * Check if the current viewport matches a minimum breakpoint.
     * @param {'MOBILE'|'TABLET'|'DESKTOP'|'LARGE'} breakpoint
     * @returns {boolean}
     */
    isAtLeast(breakpoint) {
        return window.innerWidth >= (CONFIG.BREAKPOINTS[breakpoint] || 0);
    }

    /**
     * Subscribe to breakpoint changes.
     * @param {Function} callback - Called with (newBreakpoint, oldBreakpoint).
     * @returns {Function} Unsubscribe function.
     */
    onChange(callback) {
        this._listeners.add(callback);
        return () => this._listeners.delete(callback);
    }

    /** @private */
    _onResize() {
        const newBreakpoint = this._getBreakpoint();
        if (newBreakpoint !== this._currentBreakpoint) {
            const old = this._currentBreakpoint;
            this._currentBreakpoint = newBreakpoint;
            for (const cb of this._listeners) {
                cb(newBreakpoint, old);
            }
        }
    }

    /** @private */
    _getBreakpoint() {
        const w = window.innerWidth;
        const bp = CONFIG.BREAKPOINTS;

        if (w >= bp.LARGE)   return 'LARGE';
        if (w >= bp.DESKTOP) return 'DESKTOP';
        if (w >= bp.TABLET)  return 'TABLET';
        return 'MOBILE';
    }

    /**
     * @private
     * @param {Function} fn
     * @param {number}   delay
     * @returns {Function}
     */
    _debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }
}

/** Singleton instance */
export const Viewport = new ViewportManager();
