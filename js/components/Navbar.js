import Component from '../core/Component.js';

export default class Navbar extends Component {
  render() {
    return `
      <div class="container navbar-container">
        <a href="/" class="nav-logo">
          <span class="text-accent underline-accent">Likith</span>Kumar
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links desktop-nav">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#timeline" class="nav-link">Journey</a></li>
          <li><a href="resume.html" class="nav-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>

        <!-- Mobile Menu Toggle Button -->
        <button id="mobile-menu-toggle" class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-dropdown-menu">
          <span class="hamburger-line top-line"></span>
          <span class="hamburger-line mid-line"></span>
          <span class="hamburger-line bot-line"></span>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-dropdown-menu" class="mobile-dropdown-menu" aria-hidden="true">
        <div class="mobile-dropdown-inner container">
          <ul class="mobile-nav-links">
            <li><a href="#about" class="mobile-nav-link"><span class="mobile-nav-idx">01.</span> About</a></li>
            <li><a href="#projects" class="mobile-nav-link"><span class="mobile-nav-idx">02.</span> Projects</a></li>
            <li><a href="#skills" class="mobile-nav-link"><span class="mobile-nav-idx">03.</span> Skills</a></li>
            <li><a href="#timeline" class="mobile-nav-link"><span class="mobile-nav-idx">04.</span> Journey & Impact</a></li>
            <li><a href="#contact" class="mobile-nav-link"><span class="mobile-nav-idx">05.</span> Contact</a></li>
            <li class="mobile-resume-item">
              <a href="resume.html" class="btn btn-outline mobile-resume-btn" target="_blank" rel="noopener noreferrer">
                <span>View Resume</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="mobile-menu-backdrop" class="mobile-menu-backdrop" aria-hidden="true"></div>
    `;
  }

  afterRender() {
    const toggleBtn = this.element.querySelector('#mobile-menu-toggle');
    const dropdown = this.element.querySelector('#mobile-dropdown-menu');
    const backdrop = this.element.querySelector('#mobile-menu-backdrop');
    const links = this.element.querySelectorAll('.mobile-nav-link, .mobile-resume-btn');

    if (!toggleBtn || !dropdown) return;

    const openMenu = () => {
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      dropdown.classList.add('open');
      dropdown.setAttribute('aria-hidden', 'false');
      if (backdrop) backdrop.classList.add('active');
      document.body.classList.add('mobile-nav-open');
    };

    const closeMenu = () => {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('open');
      dropdown.setAttribute('aria-hidden', 'true');
      if (backdrop) backdrop.classList.remove('active');
      document.body.classList.remove('mobile-nav-open');
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    links.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && dropdown.classList.contains('open')) {
        closeMenu();
      }
    });
  }
}
