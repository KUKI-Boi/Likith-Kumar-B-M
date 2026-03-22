export default class Background {
  constructor() {
    this.container = document.createElement('div');
    this.container.id = 'bg-canvas';
    document.body.prepend(this.container);
    
    // Check if VANTA is loaded (since scripts are imported in HTML)
    if (window.VANTA && window.VANTA.GLOBE) {
      this.initVanta();
    } else {
      // If scripts are still loading
      window.addEventListener('load', () => this.initVanta());
    }
    
    // Handle resource cleanup if component is unmounted
    this.vantaEffect = null;
  }

  initVanta() {
    if (!window.VANTA || !window.VANTA.GLOBE) return;
    
    this.vantaEffect = window.VANTA.GLOBE({
      el: "#bg-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0a192f, // var(--bg-primary)
      color: 0x4da3ff,          // var(--accent)
      color2: 0x2b5b84,         // slightly darker accent for depth
      size: 1.10
    });
  }
}
