import Component from '../core/Component.js';

export default class Navbar extends Component {
  render() {
    return `
      <div class="container navbar-container">
        <a href="/" class="nav-logo" style="display:flex; align-items:center; gap:0.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8a2 2 0 0 0-1.6.8L3.7 11l-1.86.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"></path></svg>
          <span><span class="text-accent underline-accent">Likith</span>Kumar</span>
        </a>
        <ul class="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="resume.html" class="nav-link" target="_blank">Resume</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    `;
  }
}
