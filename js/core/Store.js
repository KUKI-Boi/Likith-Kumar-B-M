/* ============================================
   Store — Store.js
   Simple Observable state management.
   ============================================ */

export class Store {
    /**
     * @param {Object} initialState - The initial application state.
     */
    constructor(initialState = {}) {
        this._state = { ...initialState };
        /** @type {Map<string, Set<Function>>} */
        this._listeners = new Map();
    }

    /**
     * Get the current state (read-only copy).
     * @returns {Object}
     */
    getState() {
        return { ...this._state };
    }

    /**
     * Update state and notify subscribers of changed keys.
     * @param {Object} updates - Partial state to merge.
     */
    setState(updates) {
        const changedKeys = [];

        for (const key of Object.keys(updates)) {
            if (this._state[key] !== updates[key]) {
                changedKeys.push(key);
            }
        }

        this._state = { ...this._state, ...updates };

        for (const key of changedKeys) {
            this._notify(key);
        }
    }

    /**
     * Subscribe to changes on a specific state key.
     * @param {string}   key      - The state key to observe.
     * @param {Function} callback - Called with (newValue, key) on change.
     * @returns {Function} Unsubscribe function.
     */
    subscribe(key, callback) {
        if (!this._listeners.has(key)) {
            this._listeners.set(key, new Set());
        }
        this._listeners.get(key).add(callback);

        return () => {
            this._listeners.get(key)?.delete(callback);
        };
    }

    /**
     * @private
     * @param {string} key
     */
    _notify(key) {
        const listeners = this._listeners.get(key);
        if (listeners) {
            for (const callback of listeners) {
                callback(this._state[key], key);
            }
        }
    }
}
