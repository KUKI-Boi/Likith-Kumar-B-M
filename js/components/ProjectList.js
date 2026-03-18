/* ============================================
   ProjectList Component — ProjectList.js
   Dynamic rendering from data/projects.json.
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
        } catch (error) {
            console.error('Failed to load projects:', error);
            this.setState({ loading: false });
        }
    }

    render() {
        if (this.state.loading) {
            return `<div class="l-container u-text-center">Loading projects...</div>`;
        }

        return `
            <div class="projects__story">
                ${this.state.projects.map((project, index) => `
                    <article class="project-story-item" data-animate data-stagger-index="${index}">
                        <div class="project-story-item__header">
                            <h3 class="project-story-item__title">${project.title}</h3>
                            <div class="project-card__tags">
                                ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
                            </div>
                        </div>

                        <div class="project-story-item__content l-grid l-grid--3-cols">
                            <div class="story-block">
                                <h4 class="story-block__label">The Challenge</h4>
                                <p class="story-block__text">${project.narrative.challenge}</p>
                            </div>
                            <div class="story-block u-accent-border">
                                <h4 class="story-block__label">The Solution</h4>
                                <p class="story-block__text">${project.narrative.solution}</p>
                            </div>
                            <div class="story-block">
                                <h4 class="story-block__label">The Impact</h4>
                                <p class="story-block__text">${project.narrative.impact}</p>
                            </div>
                        </div>

                        <div class="project-story-item__footer">
                            <a href="${project.github}" class="btn btn--secondary btn--sm" target="_blank">View Technical Specs</a>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }
}
