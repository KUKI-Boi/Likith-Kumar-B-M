/* ============================================
   Router — Router.js
   Minimal hash-based SPA router.
   ============================================ */

export class Router {
    constructor() {
        /** @type {Map<string, Function>} */
        this.routes = new Map();

        /** @type {HTMLElement|null} */
        this.outlet = null;

        this._onHashChange = this._onHashChange.bind(this);
    }

    /**
     * Set the DOM element where page content will be rendered.
     * @param {HTMLElement} element
     * @returns {Router}
     */
    setOutlet(element) {
        this.outlet = element;
        return this;
    }

    /**
     * Register a route.
     * @param {string}   path    - Route path (e.g., '/about').
     * @param {Function} handler - Function that returns HTML string or mounts a Component.
     * @returns {Router}
     */
    on(path, handler) {
        this.routes.set(path, handler);
        return this;
    }

    /**
     * Start listening for hash changes and render the initial route.
     */
    start() {
        window.addEventListener('hashchange', this._onHashChange);
        this._onHashChange();
    }

    /**
     * Stop listening for hash changes.
     */
    stop() {
        window.removeEventListener('hashchange', this._onHashChange);
    }

    /**
     * Navigate programmatically.
     * @param {string} path
     */
    navigate(path) {
        window.location.hash = `#${path}`;
    }

    /**
     * Get the current route path from the hash.
     * @returns {string}
     */
    getCurrentPath() {
        return window.location.hash.slice(1) || '/';
    }

    /**
     * @private
     */
    _onHashChange() {
        const path = this.getCurrentPath();
        const handler = this.routes.get(path) || this.routes.get('*');

        if (handler && this.outlet) {
            handler(this.outlet);
        }
    }
}
