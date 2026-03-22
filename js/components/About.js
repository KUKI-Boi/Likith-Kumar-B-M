import Component from '../core/Component.js';

export default class About extends Component {
  render() {
    console.log('About component v2 loaded');
    return `
      <div class="container">
        <div class="grid grid-cols-12 gap-16 items-center">
          <div class="about-text col-span-7">
            <h2 class="text-accent uppercase tracking-widest mb-4 reveal">About Me</h2>
            <h3 class="fs-4xl mb-6 reveal delay-100">Merging engineering precision with intelligent technology.</h3>
            <p class="mb-6 reveal delay-200">
              I am an engineering student focused on electric mobility, control systems, and intelligent system design. I work on building efficient and scalable solutions that integrate hardware, software, and system-level thinking.
            </p>
            <p class="mb-6 reveal delay-300">
              My interests lie in solving real-world engineering challenges in next-generation mobility systems.
            </p>
            <div class="about-stats grid grid-cols-2 gap-8 reveal delay-400">
              <div class="stat-item">
                <span class="stat-number text-accent">3+</span>
                <span class="stat-label">Major Projects</span>
              </div>
              <div class="stat-item">
                <span class="stat-number text-accent">5+</span>
                <span class="stat-label">Tech Stack</span>
              </div>
            </div>
          </div>
          <div class="about-visual reveal delay-200 col-span-5">
            <div class="visual-box">
              <img src="assets/images/profile.jpg" alt="Likith Kumar" class="profile-img">
              <div class="visual-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
