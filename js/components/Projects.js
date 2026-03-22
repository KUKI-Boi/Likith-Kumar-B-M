import Component from '../core/Component.js';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        id: 'hybrid-ess',
        title: 'Hybrid Energy Storage System (HESS)',
        context: 'Electric Mobility',
        description: 'Engineered a high-performance energy storage architecture integrating Lithium-ion batteries with Supercapacitors to optimize power delivery and extend battery cycle life.',
        role: 'Systems Engineer',
        tech: ['MATLAB', 'Simulink', 'System Modeling', 'Control Logic Design'],
        github: 'https://github.com/KUKI-Boi/hybrid-energy-storage-system.git',
        demo: 'https://kuki-boi.github.io/hybrid-energy-storage-system/',
        image: 'assets/images/hess-project.png',
        caseStudy: {
          problem: 'Battery-only systems face significant thermal stress and accelerated degradation during frequent peak load transients (acceleration) and high-current regenerative braking.',
          approach: 'Developed an Intelligent Energy Management Strategy (IEMS) using a rule-based control algorithm to decouple power and energy requirements, diverting transients to supercapacitors while maintaining steady-state loads on the battery.',
          design: 'Implemented a parallel HESS topology with a bi-directional DC-DC converter interface for the supercapacitor, managed by a hierarchical control layer.',
          challenges: 'Managing Supercapacitor SOC (State of Charge) to ensure headroom for regeneration while maintaining boost capability under dynamic load conditions.',
          outcome: 'Achieved a 20% reduction in battery peak current and improved transient voltage stability, demonstrating a scalable approach to increasing EV range and durability.',
          learnings: 'Gained deep insights into power-split optimization and managing conflicting constraints between performance, cost, and reliability.',
        }
      },
      {
        id: 'regen-suspension',
        title: 'Electromagnetic Regenerative Suspension',
        context: 'Energy Recovery',
        description: 'Designed an electromechanical energy recovery system capturing kinetic energy from vehicle oscillations, converting vibration energy into electrical power.',
        role: 'Mechanical/Systems Engineer',
        tech: ['Simulation', 'Mechanical Design Concepts', 'Energy Conversion Systems'],
        github: 'https://github.com/KUKI-Boi/Regenerative-Suspension.git',
        demo: 'https://kuki-boi.github.io/Regenerative-Suspension/',
        image: 'assets/images/regen-project.png',
        caseStudy: {
          problem: 'Vehicle suspension systems traditionally dissipate significant kinetic energy as heat. The challenge is recovering this energy without compromising ride comfort or handling stability.',
          approach: 'Integrated a linear-to-rotary generator within the suspension geometry. Developed a recovery circuit to balance damping requirements with energy harvesting efficiency.',
          outcome: 'Successfully modeled a recoverability of up to 100W per wheel under standard road roughness, proving feasibility for supplementary auxiliary power.'
        }
      },
      {
        id: 'intelligent-control',
        title: 'Optimal Control for Dynamic Systems',
        context: 'Dynamic Systems',
        description: 'Developed and validated precision control-oriented solutions for high-order dynamic systems, focusing on minimizing settling time and overshoot.',
        role: 'Control Systems Engineer',
        tech: ['Control Systems', 'MATLAB', 'System Modeling'],
        github: 'https://github.com/KUKI-Boi/altitude-hold-controller.git',
        image: 'assets/images/optimal-project.png',
        caseStudy: {
          problem: 'Maintaining stability and performance in non-linear systems prone to external disturbances and parameter variations requires robust control beyond standard PID tuning.',
          approach: 'Applied State-Space modeling and frequency-domain analysis to design controllers. Verified reliability using Nyquist and Bode stability techniques.',
          outcome: 'Reduced system overshoot by 15% and improved steady-state error margins, providing a robust framework for autonomous navigation and robotic actuation.'
        }
      }
    ];
  }

  render() {
    return `
      <div class="container">
        <h2 class="text-accent uppercase tracking-widest mb-4 reveal">Featured Projects</h2>
        <h3 class="fs-4xl mb-12 reveal delay-100">Engineering solutions for complex mobility challenges.</h3>
        
        <div class="projects-grid grid grid-cols-1 gap-12">
          ${this.projects.map(project => `
            <div class="project-item" data-id="${project.id}">
              <div class="project-card">
                <div class="project-info">
                  <span class="text-accent uppercase tracking-widest fs-xs mb-2 reveal">${project.context}</span>
                  <h4 class="fs-2xl mb-4 reveal delay-100">${project.title}</h4>
                  <p class="mb-6 reveal delay-200">${project.description}</p>
                  <p class="text-secondary fs-sm mb-8 reveal delay-300">Role: ${project.role}</p>
                  <div class="flex gap-4 reveal delay-400">
                    <button class="btn btn-primary" onclick="window.app.viewProject('${project.id}')">View Case Study</button>
                    ${project.github ? `
                      <a href="${project.github}" class="btn btn-outline" target="_blank" aria-label="GitHub" style="display:inline-flex; align-items:center; justify-content:center; padding:0.75rem; width: 48px; border-color: var(--border-subtle);">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    ` : ''}
                    ${project.demo ? `
                      <a href="${project.demo}" class="btn btn-outline demo-btn" target="_blank" aria-label="Live Demo" style="display:inline-flex; align-items:center; justify-content:center; padding:0.75rem; width: 48px; border-color: var(--border-subtle); overflow:hidden;">
                        <svg width="20" height="20" class="car-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8a2 2 0 0 0-1.6.8L3.7 11l-1.86.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg>
                      </a>
                    ` : ''}
                  </div>
                </div>
                <div class="project-visual reveal delay-200">
                  ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img">` : `<div class="visual-placeholder"></div>`}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}
