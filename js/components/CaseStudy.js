import Component from '../core/Component.js';

export default class CaseStudy extends Component {
  render() {
    const { project } = this.props;
    if (!project) return '';

    const cs = project.caseStudy || {};
    
    return `
      <div class="case-study-page">
        <div class="container py-12">
          <div class="case-study-header flex justify-between items-center mb-12">
            <div>
              <span class="text-accent uppercase tracking-widest fs-xs mb-2 block">${project.context}</span>
              <h2 class="fs-4xl">${project.title}</h2>
            </div>
            <div class="flex gap-4 case-study-actions">
              ${project.demo ? `
                <a href="${project.demo}" class="btn btn-primary demo-btn" target="_blank" style="display:inline-flex; align-items:center; gap:0.5rem; overflow:hidden;">
                  <svg width="18" height="18" class="car-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  Live Demo
                </a>
              ` : ''}
              ${project.github ? `
                <a href="${project.github}" class="btn btn-outline" target="_blank" style="display:inline-flex; align-items:center; gap:0.5rem;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
              ` : ''}
              <button class="btn-text back-btn" onclick="window.app.closeCaseStudy()">Close ×</button>
            </div>
          </div>
          
          <div class="case-study-content reveal delay-100 active">
            <div class="grid grid-cols-12 gap-16 mb-12">
              <div class="col-span-8">
                <h3 class="fs-xl mb-4 text-accent">The Challenge</h3>
                <p class="mb-8 fs-lg">${cs.problem || project.description}</p>
                
                <h3 class="fs-xl mb-4 text-accent">Our Approach</h3>
                <p class="mb-8 text-secondary">${cs.approach || 'Detailed description of the technical approach and methodologies used.'}</p>
                
                ${cs.design ? `<h3 class="fs-xl mb-4 text-accent">System Design</h3><p class="mb-8 text-secondary">${cs.design}</p>` : ''}
                ${cs.challenges ? `<h3 class="fs-xl mb-4 text-accent">Challenges Overcome</h3><p class="mb-8 text-secondary">${cs.challenges}</p>` : ''}
                ${cs.learnings ? `<h3 class="fs-xl mb-4 text-accent">Key Learnings</h3><p class="mb-8 text-secondary">${cs.learnings}</p>` : ''}
              </div>
              <div class="col-span-4">
                <div class="tech-stack-card p-6 border border-subtle bg-secondary rounded-lg mb-8">
                  <h3 class="fs-sm uppercase tracking-widest mb-4">Tech Stack</h3>
                  <ul class="tech-list">
                    ${(project.tech || []).map(t => `<li class="mb-2 text-secondary">• ${t}</li>`).join('')}
                  </ul>
                </div>
                
                <h3 class="fs-sm uppercase tracking-widest mb-4">Outcome</h3>
                <p class="text-secondary">${cs.outcome || 'Successful implementation and validation of the system.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
