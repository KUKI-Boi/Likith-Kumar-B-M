import Component from '../core/Component.js';

export default class Contact extends Component {
  render() {
    return `
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info reveal col-span-6">
            <div class="contact-header-block">
              <div class="flex items-center gap-3 flex-wrap mb-4">
                <div class="availability-badge">
                  <span class="status-pulse-dot"></span>
                  <span class="status-pulse-text">Open to Opportunities</span>
                </div>
                <div class="location-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="location-pin-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Bengaluru, India</span>
                </div>
              </div>
              <h2 class="text-accent uppercase tracking-widest mb-3">Get In Touch</h2>
              <h3 class="fs-3xl mb-4">Let’s Build Something Meaningful</h3>
              
              <p class="contact-pitch mb-6">
                Currently open to <strong>internships</strong>, <strong>collaborative projects</strong>, and opportunities to contribute to meaningful software & engineering products — especially where strong systems engineering meets practical real-world impact.
              </p>
            </div>
            
            <div class="contact-links-block">
              <a href="mailto:likithkumarbm@gmail.com" class="contact-email-card mb-4">
                <div class="contact-email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div class="contact-email-text">
                  <span class="contact-email-label">Email</span>
                  <span class="contact-email-val">likithkumarbm@gmail.com</span>
                </div>
                <span class="contact-email-arrow">→</span>
              </a>

              <div class="social-links flex gap-4 items-center">
                <a href="https://github.com/KUKI-Boi" class="social-icon" target="_blank" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/likith-kumar-b-m-602ba8315/" class="social-icon" target="_blank" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="resume.html" class="social-icon" target="_blank" aria-label="Resume">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="contact-form-container reveal delay-200 col-span-6">
            <form id="contact-form" class="contact-form">
              <input type="hidden" name="access_key" value="4a6cb5b4-60c6-4136-a032-236ba48207a8">
              <input type="hidden" name="subject" value="New Contact Form Submission - Likith Kumar Portfolio">
              <input type="hidden" name="from_name" value="LK Portfolio">
              <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
              <div class="form-group mb-6">
                <label for="name" class="fs-xs uppercase tracking-widest mb-2 block">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" class="form-input" required>
              </div>
              <div class="form-group mb-6">
                <label for="email" class="fs-xs uppercase tracking-widest mb-2 block">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" class="form-input" required>
              </div>
              <div class="form-group mb-8">
                <label for="message" class="fs-xs uppercase tracking-widest mb-2 block">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we collaborate?" class="form-input" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full" style="transition: all 0.3s ease;">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}
