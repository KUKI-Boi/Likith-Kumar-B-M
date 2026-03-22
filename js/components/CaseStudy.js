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
            <div class="flex gap-4">
              ${project.github ? `<a href="${project.github}" class="btn btn-outline" target="_blank">GitHub Repo</a>` : ''}
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
