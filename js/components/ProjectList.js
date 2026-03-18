/* ============================================
   ProjectList Component — ProjectList.js
   Renders project cards from data source.
   ============================================ */

import { Component } from '../core/Component.js';
import { fetchJSON } from '../utils/helpers.js';
import { CONFIG } from '../config.js';

export class ProjectList extends Component {
    constructor(rootElement, props = {}) {
        super(rootElement, props);
        this.state = {
            projects: [],
            isLoading: true,
        };
    }

    render() {
        const { projects, isLoading } = this.state;

        if (isLoading) {
            return `<p class="u-text-center u-text-muted a-pulse">Loading projects...</p>`;
        }

        if (projects.length === 0) {
            return `<p class="u-text-center u-text-muted">No projects found.</p>`;
        }

        return `
            <div class="l-grid l-grid--auto">
                ${projects.map(project => `
                    <article class="project-card">
                        ${project.image
                            ? `<img class="project-card__image" src="${project.image}" alt="${project.title}" loading="lazy">`
                            : ''
                        }
                        <div class="project-card__content">
                            <h3 class="project-card__title">${project.title}</h3>
                            <p class="project-card__description">${project.description}</p>
                            <div class="project-card__tags">
                                ${(project.tags || []).map(tag =>
                                    `<span class="project-card__tag">${tag}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }

    async onMount() {
        try {
            const projects = await fetchJSON(CONFIG.DATA_PATHS.PROJECTS);
            this.setState({ projects, isLoading: false });
        } catch (error) {
            console.error('[ProjectList] Failed to load projects:', error);
            this.setState({ projects: [], isLoading: false });
        }
    }
}
