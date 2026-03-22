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
                <a href="https://github.com/KUKI-Boi" class="social-icon" target="_blank">GH</a>
                <a href="https://www.linkedin.com/in/likith-kumar-b-m-602ba8315/" class="social-icon" target="_blank">LI</a>
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
