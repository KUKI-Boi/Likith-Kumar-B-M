/* ============================================
   App Configuration — config.js
   Global constants and configuration values.
   ============================================ */

export const CONFIG = {
    /* Site metadata */
    SITE_NAME: 'Portfolio',
    SITE_AUTHOR: 'Likith',

    /* Breakpoints (must match CSS variables.css) */
    BREAKPOINTS: {
        MOBILE:  0,
        TABLET:  768,
        DESKTOP: 1024,
        LARGE:   1440,
    },

    /* Navigation routes */
    ROUTES: {
        HOME:     '/',
        ABOUT:    '/about',
        PROJECTS: '/projects',
        CONTACT:  '/contact',
    },

    /* API / Data paths */
    DATA_PATHS: {
        PROJECTS: './data/projects.json',
    },

    /* Animation durations (ms) */
    ANIMATION: {
        FAST:   150,
        BASE:   250,
        SLOW:   400,
    },
};
