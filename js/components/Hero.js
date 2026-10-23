import Component from '../core/Component.js';

export default class Hero extends Component {
  render() {
    return `
      <div class="container hero-content">
        <div class="hero-meta-badge mb-4 reveal">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="location-pin-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Bengaluru, India</span>
          <span class="meta-dot-sep">•</span>
          <span>Christ (Deemed to be University)</span>
        </div>
        <h2 class="text-accent uppercase tracking-widest mb-4 reveal delay-100">Likith Kumar</h2>
        <h1 class="hero-title mb-8 reveal delay-100">I turn ideas into <span class="text-accent">intelligent systems</span>.</h1>
        <p class="hero-subtitle mb-12 reveal delay-200">Focused on designing efficient, scalable, and real-world engineering solutions across EV systems, control systems, and intelligent technologies.</p>
        <div class="hero-cta reveal delay-300">
          <a href="#projects" class="btn btn-primary">Discover Projects</a>
          <a href="resume.html" class="btn btn-outline" target="_blank">View Resume</a>
        </div>
      </div>
      <div class="scroll-indicator reveal delay-400">
        <span class="scroll-line"></span>
      </div>
    `;
  }

  afterRender() {
    // Reveal animation classes are already handled by main.js scroll listener
    // But we can trigger them manually if they are in view
  }
}
