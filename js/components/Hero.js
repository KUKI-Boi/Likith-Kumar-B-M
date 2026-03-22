import Component from '../core/Component.js';

export default class Hero extends Component {
  render() {
    return `
      <div class="container hero-content">
        <h2 class="text-accent uppercase tracking-widest mb-4 reveal">Likith Kumar</h2>
        <h1 class="hero-title mb-8 reveal delay-100">I build <span class="text-accent">intelligent systems</span><br>for electric mobility.</h1>
        <p class="hero-subtitle mb-12 reveal delay-200">Focused on designing efficient, scalable, and real-world engineering solutions across EV systems, control systems, and intelligent technologies.</p>
        <div class="hero-cta reveal delay-300">
          <a href="#projects" class="btn btn-primary">Discover Projects</a>
          <a href="#contact" class="btn btn-outline">Let's Talk</a>
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
