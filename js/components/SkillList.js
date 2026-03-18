/* ============================================
   SkillList Component — SkillList.js
   Dynamic rendering of real skill categories.
   ============================================ */

import { Component } from '../core/Component.js';

export class SkillList extends Component {
    constructor(rootElement, props = {}) {
        super(rootElement, props);
        this.state = {
            categories: [
                {
                    title: 'Programming',
                    skills: ['Python', 'C']
                },
                {
                    title: 'Tools & Software',
                    skills: ['MATLAB', 'AutoCAD Electrical']
                },
                {
                    title: 'Engineering Domains',
                    skills: [
                        'Electric Vehicles',
                        'Control Systems',
                        'Energy Systems',
                        'Embedded Systems',
                        'IoT'
                    ]
                },
                {
                    title: 'Soft Skills',
                    skills: [
                        'Critical Thinking',
                        'Time Management',
                        'Teamwork',
                        'Technical Communication'
                    ]
                }
            ]
        };
    }

    render() {
        return `
            <div class="l-grid l-grid--auto" style="margin-top: var(--space-xl);">
                ${this.state.categories.map((category, index) => `
                    <div class="skill-group" data-animate data-stagger-index="${index}">
                        <h3 class="skill-group__title">${category.title}</h3>
                        <ul class="skill-group__list">
                            ${category.skills.map(skill => `
                                <li class="skill-group__item">${skill}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    }
}
