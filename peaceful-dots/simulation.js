const VERSION = '0.1';

// Mass range constants
const MIN_MASS = 0.5;
const MAX_MASS = 2.0;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set canvas to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Mouse position
const mouse = {
    x: null,
    y: null
};

// Particle class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 3;
        this.friction = 0.95;
        this.mass = MIN_MASS + Math.random() * (MAX_MASS - MIN_MASS);
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = 0;
        this.vy = 0;
        this.mass = MIN_MASS + Math.random() * (MAX_MASS - MIN_MASS);
    }

    update() {
        // Apply friction to slow down dots
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Update position based on velocity
        this.x += this.vx;
        this.y += this.vy;

        // Keep dots within bounds
        if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -0.5;
            this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -0.5;
            this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Check mouse proximity and apply force
        if (mouse.x !== null && mouse.y !== null) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = 75;

            if (distance < minDistance) {
                const force = (minDistance - distance) / minDistance;
                const angle = Math.atan2(dy, dx);
                const acceleration = force / this.mass;
                this.vx += Math.cos(angle) * acceleration;
                this.vy += Math.sin(angle) * acceleration;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#4a9eff';
        ctx.fill();
    }
}

// Create dots
const dots = [];
const numberOfDots = 10000;

for (let i = 0; i < numberOfDots; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    dots.push(new Dot(x, y));
}

// Track mouse position
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Reset dots on click
canvas.addEventListener('click', () => {
    dots.forEach(dot => dot.reset());
});

// Touch support
let lastTapTime = 0;

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;

    // Detect double-tap
    const currentTime = Date.now();
    const timeDiff = currentTime - lastTapTime;

    if (timeDiff < 300 && timeDiff > 0) {
        // Double-tap detected - reset dots
        dots.forEach(dot => dot.reset());
    }

    lastTapTime = currentTime;
}, { passive: false });

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
}, { passive: false });

canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    mouse.x = null;
    mouse.y = null;
}, { passive: false });

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Animation loop
function animate() {
    ctx.fillStyle = 'rgba(26, 26, 26, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    dots.forEach(dot => {
        dot.update();
        dot.draw();
    });

    // Draw version number
    ctx.fillStyle = '#666666';
    ctx.font = '14px monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText(`v${VERSION}`, canvas.width - 10, canvas.height - 10);

    requestAnimationFrame(animate);
}

animate();
