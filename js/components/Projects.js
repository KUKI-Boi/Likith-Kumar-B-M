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
        caseStudy: {
          problem: 'Battery-only systems face significant thermal stress and accelerated degradation during frequent peak load transients (acceleration) and high-current regenerative braking.',
          approach: 'Developed an Intelligent Energy Management Strategy (IEMS) using a rule-based control algorithm to decouple power and energy requirements, diverting transients to supercapacitors while maintaining steady-state loads on the battery.',
          design: 'Implemented a parallel HESS topology with a bi-directional DC-DC converter interface for the supercapacitor, managed by a hierarchical control layer.',
          challenges: 'Managing Supercapacitor SOC (State of Charge) to ensure headroom for regeneration while maintaining boost capability under dynamic load conditions.',
          outcome: 'Achieved a 20% reduction in battery peak current and improved transient voltage stability, demonstrating a scalable approach to increasing EV range and durability.',
          learnings: 'Gained deep insights into power-split optimization and managing conflicting constraints between performance, cost, and reliability.'
        }
      },
      {
        id: 'regen-suspension',
        title: 'Electromagnetic Regenerative Suspension',
        context: 'Energy Recovery',
        description: 'Designed an electromechanical energy recovery system capturing kinetic energy from vehicle oscillations, converting vibration energy into electrical power.',
        role: 'Mechanical/Systems Engineer',
        tech: ['Simulation', 'Mechanical Design Concepts', 'Energy Conversion Systems'],
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
                  <button class="btn-text reveal delay-400" onclick="window.app.viewProject('${project.id}')">View Case Study →</button>
                </div>
                <div class="project-visual reveal delay-200">
                  <div class="visual-placeholder"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}
