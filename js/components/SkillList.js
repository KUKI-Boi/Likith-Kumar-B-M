/* ============================================
   SkillList Component — SkillList.js
   ============================================ */

import { Component } from '../core/Component.js';

export class SkillList extends Component {
    constructor(rootElement, props = {}) {
        super(rootElement, props);
        this.state = {
            categories: [
                {
                    title: 'Programming',
                    items: ['JavaScript (ES6+)', 'Python', 'C / Embedded C', 'MATLAB', 'HTML & CSS']
                },
                {
                    title: 'Tools & Platforms',
                    items: ['MATLAB / Simulink', 'Git & GitHub', 'VS Code', 'Arduino / ESP32', 'Figma']
                },
                {
                    title: 'Domains',
                    items: ['Electric Vehicle Systems', 'Control Systems Design', 'Energy Storage & Management', 'Intelligent Mobility', 'Power Electronics']
                }
            ]
        };
    }

    render() {
        return `
            <div class="skills__grid l-grid l-grid--auto">
                ${this.state.categories.map((category, index) => `
                    <div class="skill-group" data-stagger-item data-stagger-index="${index}">
                        <h3 class="skill-group__title">${category.title}</h3>
                        <ul class="skill-group__list" role="list">
                            ${category.items.map(item => `
                                <li class="skill-group__item">${item}</li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
    }
}
