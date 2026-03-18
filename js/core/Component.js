/* ============================================
   Base Component — Component.js
   Lightweight base class for UI components.
   Mirrors React's component lifecycle pattern.
   ============================================ */

export class Component {
    /**
     * @param {HTMLElement} rootElement - The DOM node this component mounts to.
     * @param {Object}      props      - Initial properties/data for the component.
     */
    constructor(rootElement, props = {}) {
        this.root = rootElement;
        this.props = props;
        this.state = {};
        this._isMounted = false;
    }

    /**
     * Update component state and trigger a re-render.
     * @param {Object} newState - Partial state to merge.
     */
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this._update();
    }

    /**
     * Render the component's HTML string.
     * Override in subclasses.
     * @returns {string} HTML template string.
     */
    render() {
        return '';
    }

    /**
     * Called after the component is mounted to the DOM.
     * Override to attach event listeners or fetch data.
     */
    onMount() {}

    /**
     * Called before the component is removed from the DOM.
     * Override to clean up listeners or timers.
     */
    onUnmount() {}

    /**
     * Mount the component: render HTML and call onMount.
     */
    mount() {
        this._update();
        this._isMounted = true;
        this.onMount();
    }

    /**
     * Unmount the component: clear DOM and call onUnmount.
     */
    unmount() {
        this.onUnmount();
        this.root.innerHTML = '';
        this._isMounted = false;
    }

    /**
     * Internal: Re-render the component's HTML into the root element.
     * @private
     */
    _update() {
        this.root.innerHTML = this.render();
        // Notify that the component has updated its DOM
        this.root.dispatchEvent(new CustomEvent('componentUpdate', { bubbles: true }));
    }
}
