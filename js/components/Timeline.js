import Component from '../core/Component.js';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.entries = [
      {
        year: 'Present',
        title: 'IEEE PELS Webmaster',
        impact: 'Organized technical events, fostering engineering education and professional networking.'
      },
      {
        year: '2025',
        title: 'Power & Energy Society (PES) Member',
        impact: 'Participated actively in social and technical initiatives aimed at advancing energy technology.'
      },
      {
        year: '2024',
        title: 'Hackathon Winner',
        impact: 'Developed innovative, high-impact engineering solutions under intense time constraints.'
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
            const delay = (index % 3 + 1) * 100; // 100, 200, 300 ms delays
            return `
            <div class="timeline-item reveal delay-${delay}">
              <div class="timeline-date">
                <span class="year text-accent">${entry.year}</span>
              </div>
              <div class="timeline-content">
                <h4 class="fs-xl mb-2">${entry.title}</h4>
                <p>${entry.impact}</p>
              </div>
            </div>
          `}).join('')}
        </div>
      </div>
    `;
  }
}
