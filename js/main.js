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

        requestAnimationFrame(() => {
          appEl.style.pointerEvents = 'auto';
          appEl.style.opacity = '1';
        });
      }, 400);
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
      submitButton.textContent = 'Sending...';
      
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData);

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          submitButton.textContent = 'Message Sent! ✓';
          submitButton.style.backgroundColor = '#28a745'; // Success green
          submitButton.style.borderColor = '#28a745';
          submitButton.style.color = '#fff';
          form.reset();
          
          setTimeout(() => {
            submitButton.textContent = 'Send Message →';
            submitButton.style = ''; // Reset inline styles
          }, 5000);
        } else {
          console.error('Server error:', json);
          submitButton.textContent = json.message || 'Error: Try Again';
          setTimeout(() => submitButton.textContent = 'Send Message →', 3000);
        }
      })
      .catch(error => {
        console.error('Network/Fetch error:', error);
        submitButton.textContent = 'Connection Error';
        setTimeout(() => submitButton.textContent = 'Send Message →', 3000);
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
