import Component from '../core/Component.js';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.entries = [
      {
        year: 'Present',
        title: 'Co-Founder — Verblyn Labs',
        impact: 'Product direction, feature planning, and building the first working version of the platform in a collaborative early-stage environment.',
        logo: 'assets/logos/verblyn-labs-logo.png',
        link: 'https://www.linkedin.com/company/verblynlabs/'
      },
      {
        year: 'Present',
        title: 'IEEE PELS Webmaster',
        impact: 'Organized technical events, fostering engineering education and professional networking.',
        logo: null
      },
      {
        year: '2025',
        title: 'Power & Energy Society (PES) Member',
        impact: 'Participated actively in social and technical initiatives aimed at advancing energy technology.',
        logo: null
      },
      {
        year: '2025',
        title: 'Hackathon Winner',
        impact: 'Developed innovative, high-impact engineering solutions under intense time constraints.',
        logo: null
      }
    ];
  }

  render() {
    return `
      <div class="container">
        <h2 class="text-accent uppercase tracking-widest mb-4 reveal">Journey & Impact</h2>
        <h3 class="fs-4xl mb-12 reveal delay-100">Milestones in engineering and innovation.</h3>

        <div class="timeline reveal draw-line">
          ${this.entries.map((entry, index) => {
      const delay = (index % 3 + 1) * 100;
      return `
            <div class="timeline-item reveal delay-${delay}">
              <div class="timeline-date">
                <span class="year text-accent">${entry.year}</span>
              </div>
              <div class="timeline-content flex items-start gap-4">
                ${entry.logo ? `
                  <div class="timeline-logo border border-subtle p-2 bg-secondary rounded-lg" style="width: 60px; height: 60px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <img src="${entry.logo}" alt="${entry.title}" style="width: 100%; height: 100%; object-fit: contain;">
                  </div>
                ` : ''}
                <div>
                  <h4 class="fs-xl mb-2">
                    ${entry.link ? `<a href="${entry.link}" target="_blank" class="hover-accent" style="color: inherit; text-decoration: none;">${entry.title}</a>` : entry.title}
                  </h4>
                  <p class="text-secondary">${entry.impact}</p>
                </div>
              </div>
            </div>
          `}).join('')}
        </div>
      </div>
    `;
  }
}
