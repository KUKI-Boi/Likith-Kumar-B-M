import Component from '../core/Component.js';

export default class Contact extends Component {
  render() {
    return `
      <div class="container">
        <div class="grid grid-cols-12 gap-16">
          <div class="contact-info reveal col-span-5">
            <h2 class="text-accent uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 class="fs-4xl mb-8">Let’s Build Something Meaningful</h3>
            <p class="mb-12">Feel free to reach out for collaboration or discussion.</p>
            
            <div class="contact-links">
              <a href="mailto:likithkumarbm@gmail.com" class="contact-link mb-4">
                <span class="text-accent">Email →</span> likithkumarbm@gmail.com
              </a>
              <div class="social-links mt-8 flex gap-4">
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
          
          <div class="contact-form-container reveal delay-200 col-span-7">
            <form id="contact-form" class="contact-form">
              <div class="form-group mb-6">
                <label for="name" class="fs-xs uppercase tracking-widest mb-2 block">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" class="form-input">
              </div>
              <div class="form-group mb-6">
                <label for="email" class="fs-xs uppercase tracking-widest mb-2 block">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" class="form-input">
              </div>
              <div class="form-group mb-8">
                <label for="message" class="fs-xs uppercase tracking-widest mb-2 block">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we collaborate?" class="form-input"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}
