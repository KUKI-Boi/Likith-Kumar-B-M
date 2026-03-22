export default class Background {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'bg-canvas';
    document.body.prepend(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    
    this.particles = [];
    // Adjust particle count based on screen size for performance
    this.particleCount = window.innerWidth < 768 ? 40 : 80;
    this.mouse = { x: null, y: null, radius: 150 };
    
    this.init();
    this.animate();
    this.bindEvents();
  }
  
  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.particles = [];
    
    for (let i = 0; i < this.particleCount; i++) {
      let size = Math.random() * 2 + 1;
      let x = Math.random() * (window.innerWidth - size * 2) + size;
      let y = Math.random() * (window.innerHeight - size * 2) + size;
      let dirX = (Math.random() * 1.5) - 0.75;
      let dirY = (Math.random() * 1.5) - 0.75;
      let color = '#4da3ff';
      
      this.particles.push(new Particle(x, y, dirX, dirY, size, color, this.ctx, this.canvas));
    }
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.init();
    });
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this.mouse);
    }
    this.connect();
  }
  
  connect() {
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a; b < this.particles.length; b++) {
        let dx = this.particles[a].x - this.particles[b].x;
        let dy = this.particles[a].y - this.particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          let opacity = 1 - (distance / 120);
          // Accent color with calculated opacity
          this.ctx.strokeStyle = `rgba(77, 163, 255, ${opacity * 0.25})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }
}

class Particle {
  constructor(x, y, dirX, dirY, size, color, ctx, canvas) {
    this.x = x;
    this.y = y;
    this.dirX = dirX * 0.5;
    this.dirY = dirY * 0.5;
    this.size = size;
    this.color = color;
    this.ctx = ctx;
    this.canvas = canvas;
  }
  
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.6;
    this.ctx.fill();
    this.ctx.globalAlpha = 1.0;
  }
  
  update(mouse) {
    if (this.x > this.canvas.width || this.x < 0) this.dirX = -this.dirX;
    if (this.y > this.canvas.height || this.y < 0) this.dirY = -this.dirY;
    
    // Mouse collision interactions
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    if (mouse.x && mouse.y && distance < mouse.radius) {
      if (mouse.x < this.x && this.x < this.canvas.width - this.size * 10) this.x += 1;
      if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1;
      if (mouse.y < this.y && this.y < this.canvas.height - this.size * 10) this.y += 1;
      if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1;
    }
    
    this.x += this.dirX;
    this.y += this.dirY;
    this.draw();
  }
}
