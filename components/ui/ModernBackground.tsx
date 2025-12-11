import React, { useEffect, useRef } from 'react';

export const ModernBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Configuration
    const PARTICLE_COUNT = 50; // Reduced count slightly for cleaner look
    const CONNECTION_DISTANCE = 160;
    const MOUSE_DISTANCE = 150;
    const MAX_SPEED = 0.8; // Cap the speed so they don't go crazy

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number; // Keep track of base speed direction
      baseY: number;
    }

    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const vx = (Math.random() - 0.5) * 0.3; // Very slow initial speed
        const vy = (Math.random() - 0.5) * 0.3;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: vx,
          vy: vy,
          baseX: vx,
          baseY: vy,
          size: Math.random() * 2 + 1.5,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const isDark = document.documentElement.classList.contains('dark');
      // Brand Color: Emerald/Primary Green
      const r = isDark ? 74 : 5;
      const g = isDark ? 222 : 79;
      const b = isDark ? 128 : 49;

      // Update and Draw Particles
      particles.forEach((p) => {
        // 1. Move
        p.x += p.vx;
        p.y += p.vy;

        // 2. Bounce off edges
        if (p.x < 0 || p.x > width) {
          p.vx *= -1; 
          p.baseX *= -1; // Flip base direction too
        }
        if (p.y < 0 || p.y > height) {
          p.vy *= -1;
          p.baseY *= -1;
        }

        // 3. Mouse interaction (Gentle Repulsion)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < MOUSE_DISTANCE) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force = (MOUSE_DISTANCE - dist) / MOUSE_DISTANCE;
          
          // Push away gently
          const repulsionStrength = 0.05; // Drastically reduced from 0.5
          p.vx -= forceDirectionX * force * repulsionStrength;
          p.vy -= forceDirectionY * force * repulsionStrength;
        }

        // 4. Speed Limiting & Friction (The fix for "crazy" bouncing)
        // Apply friction to return to base speed, preventing infinite acceleration
        const friction = 0.98;
        if (Math.abs(p.vx) > Math.abs(p.baseX)) {
             p.vx *= friction;
        }
        if (Math.abs(p.vy) > Math.abs(p.baseY)) {
             p.vy *= friction;
        }
        
        // Hard cap
        if (p.vx > MAX_SPEED) p.vx = MAX_SPEED;
        if (p.vx < -MAX_SPEED) p.vx = -MAX_SPEED;
        if (p.vy > MAX_SPEED) p.vy = MAX_SPEED;
        if (p.vy < -MAX_SPEED) p.vy = -MAX_SPEED;


        // Draw Connections
        for (let j = 0; j < particles.length; j++) {
          const p2 = particles[j];
          // Optimization: only check distance if X distance is close first
          if (Math.abs(p.x - p2.x) > CONNECTION_DISTANCE) continue;

          const distX = p.x - p2.x;
          const distY = p.y - p2.y;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < CONNECTION_DISTANCE) {
            ctx.beginPath();
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.15})`; 
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <canvas ref={canvasRef} className="absolute inset-0 block" />
        {/* Soft Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50/80 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950/80 pointer-events-none"></div>
    </div>
  );
};