import Component from '../core/Component.js';

export default class Navbar extends Component {
  render() {
    return `
      <div class="container navbar-container">
        <a href="/" class="nav-logo">
          <span class="text-accent underline-accent">Likith</span>Kumar
        </a>
        <ul class="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="resume.md" class="nav-link" target="_blank">Resume</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    `;
  }
}
