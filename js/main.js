import Router from './core/Router.js';
import Store from './core/Store.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import CaseStudy from './components/CaseStudy.js';
import Skills from './components/Skills.js';
import Timeline from './components/Timeline.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Background from './components/Background.js';

// Initialize global state
const store = new Store({
  activeProject: null,
  isModalOpen: false
});

// Initialize router
const routes = {
  '/': () => console.log('Home loaded'),
  '/project': () => console.log('Project detail loaded')
};

const router = new Router(routes);

// App singleton for global access
window.app = {
  store,
  router,
  viewProject: (id) => {
    const project = new Projects().projects.find(p => p.id === id);
    if (!project) return;

    window.app.lastOpenedProjectId = id;
    window.app.savedScrollY = window.scrollY;

    // Smooth transition out
    const appEl = document.getElementById('app');
    appEl.style.opacity = '0';
    appEl.style.pointerEvents = 'none';
    appEl.style.transition = 'opacity 0.4s ease';

    setTimeout(() => {
      appEl.style.display = 'none';

      const pageContainer = document.createElement('div');
      pageContainer.id = 'case-study-root';
      pageContainer.className = 'page-enter';
      document.body.appendChild(pageContainer);

      const cs = new CaseStudy({ project });
      cs.mount(pageContainer);
      window.scrollTo(0, 0);

      // Trigger fade in
      requestAnimationFrame(() => {
        pageContainer.classList.add('page-enter-active');
      });
    }, 400);
  },
  closeCaseStudy: () => {
    const pageContainer = document.getElementById('case-study-root');
    if (pageContainer) {
      pageContainer.classList.remove('page-enter-active');
      pageContainer.classList.add('page-leave-active');

      setTimeout(() => {
        pageContainer.remove();
        const appEl = document.getElementById('app');
        appEl.style.display = 'block';

        // Scroll directly back to the project card that was opened
        const targetCard = window.app.lastOpenedProjectId
          ? document.querySelector(`.project-item[data-id="${window.app.lastOpenedProjectId}"]`)
          : null;

        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'instant', block: 'center' });
        } else if (window.app.savedScrollY !== undefined) {
          window.scrollTo({ top: window.app.savedScrollY, behavior: 'instant' });
        } else {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'instant', block: 'start' });
          }
        }

        // Re-evaluate scroll reveal for newly visible elements
        revealOnScroll();

        requestAnimationFrame(() => {
          appEl.style.pointerEvents = 'auto';
          appEl.style.opacity = '1';
        });
      }, 400);
    }
  },
  viewCredentials: (encodedData) => {
    try {
      const data = JSON.parse(decodeURIComponent(encodedData));
      const creds = data.credentials || [data];
      let modal = document.getElementById('credential-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'credential-modal';
        modal.className = 'credential-modal-backdrop';
        modal.innerHTML = `
          <div class="credential-modal-container">
            <div class="credential-modal-header">
              <h3 id="credential-modal-title" class="credential-modal-title"></h3>
              <button type="button" class="credential-close-btn" onclick="window.app.closeCredentialModal()" aria-label="Close modal">×</button>
            </div>
            <div id="credential-modal-body" class="credential-modal-body"></div>
          </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            window.app.closeCredentialModal();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            window.app.closeCredentialModal();
          }
        });
      }

      document.getElementById('credential-modal-title').textContent = data.title || 'Credential Verification';
      const bodyEl = document.getElementById('credential-modal-body');
      
      bodyEl.innerHTML = creds.map((cred, idx) => `
        <div class="credential-item-card">
          ${creds.length > 1 ? `<div class="credential-item-title">${cred.title || `Certificate ${idx + 1}`}</div>` : ''}
          <div class="credential-img-wrapper">
            <img src="${cred.image}" alt="${cred.title || 'Credential'}" class="credential-modal-image">
          </div>
          <div class="credential-item-footer">
            <a href="${cred.image}" target="_blank" class="btn btn-outline credential-download-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>Open Full Resolution</span>
            </a>
          </div>
        </div>
      `).join('');

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    } catch (err) {
      console.error('Error opening credential modal:', err);
    }
  },
  viewCredential: (encodedCred) => {
    window.app.viewCredentials(encodedCred);
  },
  closeCredentialModal: () => {
    const modal = document.getElementById('credential-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
};

// Scroll Reveal Logic
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
};

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  new Background(); // Initialize interactive canvas background

  const heroContainer = document.getElementById('hero');
  const hero = new Hero();
  hero.mount(heroContainer);

  const aboutContainer = document.getElementById('about');
  const about = new About();
  about.mount(aboutContainer);

  const projectsContainer = document.getElementById('projects');
  const projects = new Projects();
  projects.mount(projectsContainer);

  const skillsContainer = document.getElementById('skills');
  const skills = new Skills();
  skills.mount(skillsContainer);

  const timelineContainer = document.getElementById('timeline');
  const timeline = new Timeline();
  timeline.mount(timelineContainer);

  const contactContainer = document.getElementById('contact');
  const contact = new Contact();
  contact.mount(contactContainer);

  // Contact Form Submission Handler
  const form = document.getElementById('contact-form');
  if (form) {
    const submitButton = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      const formData = new FormData(form);

      // Web3Forms standard client-side submission with FormData
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(async (response) => {
        const json = await response.json();
        if (response.ok && json.success) {
          submitButton.textContent = 'Message Sent! ✓';
          submitButton.style.backgroundColor = '#28a745';
          submitButton.style.borderColor = '#28a745';
          submitButton.style.color = '#fff';
          form.reset();
          
          setTimeout(() => {
            submitButton.textContent = 'Send Message →';
            submitButton.style = '';
            submitButton.disabled = false;
          }, 5000);
        } else {
          console.error('Web3Forms response error:', json);
          submitButton.textContent = json.message || 'Error: Try Again';
          submitButton.disabled = false;
          setTimeout(() => {
            submitButton.textContent = 'Send Message →';
          }, 4000);
        }
      })
      .catch(error => {
        console.error('Submission error:', error);
        submitButton.textContent = 'Connection Error';
        submitButton.disabled = false;
        setTimeout(() => {
          submitButton.textContent = 'Send Message →';
        }, 4000);
      });
    });
  }

  const navContainer = document.getElementById('navbar');
  const nav = new Navbar();
  nav.mount(navContainer);

  router.init();
  window.addEventListener('scroll', revealOnScroll);

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Custom cursor glow
  const appElement = document.getElementById('app');
  const glowElement = document.createElement('div');
  glowElement.classList.add('cursor-glow');
  appElement.appendChild(glowElement);

  window.addEventListener('mousemove', (e) => {
    // Only show glow on desktop
    if (window.innerWidth > 768) {
      // Use requestAnimationFrame for performance if needed, but simple style update is fast
      const x = e.clientX;
      const y = e.clientY;
      glowElement.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(77, 163, 255, 0.05), transparent 40%)`;
    }
  });

  revealOnScroll(); // Trigger once on load
});
