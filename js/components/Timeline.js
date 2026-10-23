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
        logo: null,
        credentials: [
          {
            title: 'IEEE PELS Webmaster Recognition',
            image: 'assets/images/pels-webmaster.jpg'
          }
        ]
      },
      {
        year: '2026',
        title: 'Renewable Energy Engineering Intern — MGIRED',
        impact: 'Conducted Solar PV performance testing, solar tricycle reconstruction planning, and Pico Hydro system analysis. Contributed to institutional web initiatives and technical documentation for rural sustainable energy.',
        logo: null,
        link: 'https://mgired.vercel.app/',
        credentials: [
          {
            title: 'MGIRED Internship Certificate',
            image: 'assets/images/internship-certificate-mgired.jpg'
          }
        ]
      },
      {
        year: '2025',
        title: 'Power & Energy Society (PES) Member',
        impact: 'Participated actively in social and technical initiatives aimed at advancing energy technology.',
        logo: null,
        credentials: [
          {
            title: 'IEEE PES Volunteering',
            image: 'assets/images/pes-volunteering-1.jpg'
          },
          {
            title: 'IEEE PES Volunteering',
            image: 'assets/images/pes-volunteering-2.jpg'
          }
        ]
      },
      {
        year: '2025',
        title: 'Hackathon Winner',
        impact: 'Developed innovative, high-impact engineering solutions under intense time constraints.',
        logo: null,
        credentials: [
          {
            title: 'Tech Utsav Buildathon — 2nd Prize',
            image: 'assets/images/tech-utsav-buildathon-2nd-prize.jpeg'
          }
        ]
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
              <div class="timeline-content ${entry.logo ? 'has-watermark' : ''}">
                ${entry.logo ? `
                  <div class="timeline-watermark">
                    <img src="${entry.logo}" alt="" aria-hidden="true">
                  </div>
                ` : ''}
                <div class="timeline-body">
                  <h4 class="fs-xl mb-2">
                    ${entry.link ? `<a href="${entry.link}" target="_blank" class="hover-accent" style="color: inherit; text-decoration: none;">${entry.title}</a>` : entry.title}
                  </h4>
                  <p class="text-secondary mb-4">${entry.impact}</p>
                  <div class="timeline-actions flex flex-wrap gap-2 mt-3">
                    ${entry.link ? `
                      <a 
                        href="${entry.link}" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="credential-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="2" y1="12" x2="22" y2="12"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        <span>${entry.link.includes('vercel.app') ? 'Live Website ↗' : 'Company Page ↗'}</span>
                      </a>
                    ` : ''}
                    ${entry.credentials && entry.credentials.length > 0 ? `
                      <button 
                        type="button" 
                        class="credential-btn" 
                        onclick="window.app.viewCredentials('${encodeURIComponent(JSON.stringify({ title: entry.title, credentials: entry.credentials }))}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="4" width="18" height="16" rx="2"/>
                          <circle cx="9" cy="10" r="2"/>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                        <span>View ${entry.credentials.length > 1 ? `Credentials (${entry.credentials.length})` : 'Credential'}</span>
                      </button>
                    ` : ''}
                  </div>
                </div>
              </div>
            </div>
          `}).join('')}
        </div>
      </div>
    `;
  }
}
