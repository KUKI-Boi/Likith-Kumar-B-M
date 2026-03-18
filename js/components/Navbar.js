/* ============================================
   Navbar Component — Navbar.js
   Responsive navigation with mobile toggle.
   ============================================ */

import { Component } from '../core/Component.js';
import { qs } from '../utils/dom.js';

export class Navbar extends Component {
    constructor(rootElement, props = {}) {
        super(rootElement, props);
        this.state = {
            isMenuOpen: false,
        };
    }

    render() {
        const { isMenuOpen } = this.state;
        const navLinks = this.props.links || [];

        return `
            <div class="navbar__inner">
                <a href="#/" class="navbar__logo">${this.props.logoText || 'PORTFOLIO'}</a>

                <button class="navbar__toggle" aria-label="Toggle menu" aria-expanded="${isMenuOpen}">
                    <span class="navbar__toggle-bar"></span>
                    <span class="navbar__toggle-bar"></span>
                    <span class="navbar__toggle-bar"></span>
                </button>

                <ul class="navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}">
                    ${navLinks.map(link => `
                        <li>
                            <a href="${link.href}" class="navbar__link">${link.label}</a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    onMount() {
        this.root.addEventListener('click', (e) => {
            /* Toggle mobile menu */
            if (e.target.closest('.navbar__toggle')) {
                this.setState({ isMenuOpen: !this.state.isMenuOpen });
            }

            /* Close menu on link click (mobile) */
            if (e.target.closest('.navbar__link')) {
                this.setState({ isMenuOpen: false });
            }
        });
    }
}
