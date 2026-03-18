/* ============================================
   Footer Component — Footer.js
   Site footer with contact links.
   ============================================ */

import { Component } from '../core/Component.js';

export class Footer extends Component {
    render() {
        const year = new Date().getFullYear();

        return `
            <div class="l-container u-py-xl u-text-center">
                <p class="u-text-muted">
                    &copy; ${year} ${this.props.authorName || 'Portfolio'}. All rights reserved.
                </p>
            </div>
        `;
    }
}
