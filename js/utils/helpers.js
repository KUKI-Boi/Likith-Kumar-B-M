/* ============================================
   Helpers — helpers.js
   General-purpose utility functions.
   ============================================ */

/**
 * Fetch and parse a JSON file.
 * @param {string} path - Path to JSON file.
 * @returns {Promise<Object>}
 */
export async function fetchJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    }
    return response.json();
}

/**
 * Debounce a function.
 * @param {Function} fn
 * @param {number}   delay - Delay in ms.
 * @returns {Function}
 */
export function debounce(fn, delay = 250) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Throttle a function.
 * @param {Function} fn
 * @param {number}   limit - Minimum interval in ms.
 * @returns {Function}
 */
export function throttle(fn, limit = 250) {
    let inThrottle = false;
    return (...args) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => { inThrottle = false; }, limit);
        }
    };
}

/**
 * Format a date string into a readable format.
 * @param {string} dateStr - ISO date string.
 * @returns {string}
 */
export function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
}
