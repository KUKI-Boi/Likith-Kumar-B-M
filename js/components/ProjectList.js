/* ============================================
   ProjectList Component — ProjectList.js
   Dynamic rendering with narrative case studies.
   ============================================ */

import { Component } from '../core/Component.js';

export class ProjectList extends Component {
    constructor(rootElement, props = {}) {
        super(rootElement, props);
        this.state = { projects: [], loading: true };
    }

    async onMount() {
        try {
            const response = await fetch('./data/projects.json');
            const data = await response.json();
            this.setState({ projects: data, loading: false });
            this._initCardGlow();
        } catch (error) {
            console.error('Failed to load projects:', error);
            this.setState({ loading: false });
        }
    }

    /**
     * Cursor-reactive glow effect on project cards.
     * @private
     */
    _initCardGlow() {
        const cards = this.root.querySelectorAll('.project-story-item');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }

    render() {
        if (this.state.loading) {
            return `<div class="u-text-center" style="padding: var(--space-3xl) 0; color: var(--clr-text-muted);">Loading projects...</div>`;
        }

        return `
            <div class="projects__story">
                ${this.state.projects.map((project, index) => `
                    <article class="project-story-item" data-animate data-stagger-index="${index}">
                        <div class="project-story-item__image">
                            ${project.image
                                ? `<img src="${project.image}" alt="${project.title}" loading="lazy" />`
                                : `<div class="project-placeholder-glow"><span>Visual Preview — ${project.title}</span></div>`
                            }
                        </div>

                        <div class="project-story-item__header">
                            <h3 class="project-story-item__title">${project.title}</h3>
                            <div class="project-card__tags">
                                ${(project.tags || []).map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
                            </div>
                        </div>

                        <div class="project-story-item__content l-grid l-grid--3-cols">
                            <div class="story-block">
                                <h4 class="story-block__label">The Challenge</h4>
                                <p class="story-block__text">${project.narrative?.challenge || 'Solving complex engineering constraints.'}</p>
                            </div>
                            <div class="story-block u-accent-border">
                                <h4 class="story-block__label">The Solution</h4>
                                <p class="story-block__text">${project.narrative?.solution || 'Implementing robust control and energy logic.'}</p>
                            </div>
                            <div class="story-block">
                                <h4 class="story-block__label">The Impact</h4>
                                <p class="story-block__text">${project.narrative?.impact || 'Ensuring scalable, real-world mobility solutions.'}</p>
                            </div>
                        </div>

                        <div class="project-story-item__footer">
                            <a href="${project.github}" class="btn btn--secondary btn--sm" target="_blank" rel="noopener">View on GitHub →</a>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }
}
