import Component from '../core/Component.js';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.skillsList = [
      { name: 'Electric Vehicles', category: 'Engineering Systems' },
      { name: 'Energy Storage Systems', category: 'Engineering Systems' },
      { name: 'Control Systems', category: 'Engineering Systems' },
      { name: 'System Modeling', category: 'Engineering Systems' },
      { name: 'MATLAB', category: 'Programming' },
      { name: 'Python', category: 'Programming' },
      { name: 'Simulink', category: 'Tools & Software' },
      { name: 'Git & GitHub', category: 'Tools & Software' }
    ];
  }

  render() {
    return `
      <div class="container">
        <h2 class="text-accent uppercase tracking-widest mb-4 reveal">Technical Expertise</h2>
        <h3 class="fs-4xl mb-12 reveal delay-100">A multidisciplinary approach to intelligent mobility.</h3>

        <div class="skills-grid reveal delay-200">
          ${this.skillsList.map(skill => `
            <div class="skill-card">
              <div class="skill-info">
                <span class="skill-name block mb-1">${skill.name}</span>
                <span class="skill-category fs-xs text-secondary uppercase tracking-widest">${skill.category}</span>
              </div>
              <div class="skill-dot"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

