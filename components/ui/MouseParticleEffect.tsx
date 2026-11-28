import React, { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  driftX: number;
  driftY: number;
  age: number;
  lifetime: number;
  radius: number;
  color: string;
};

const MAX_PARTICLES = 26;
const CONNECTION_DISTANCE = 58;

export const MouseParticleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    if (reducedMotion.matches || coarsePointer.matches) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    let frame = 0;
    let previousPointer: { x: number; y: number } | null = null;
    let lastFrameTime = 0;
    let darkTheme = !document.documentElement.classList.contains('light');
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const palette = () => darkTheme
      ? ['rgba(232, 184, 91, ', 'rgba(242, 240, 235, ']
      : ['rgba(49, 48, 45, ', 'rgba(139, 93, 20, '];

    const scheduleFrame = () => {
      if (!frame && !document.hidden) frame = window.requestAnimationFrame(drawFrame);
    };

    const drawFrame = (time: number) => {
      frame = 0;
      if (document.hidden) return;
      const delta = lastFrameTime ? Math.min(time - lastFrameTime, 32) : 16;
      lastFrameTime = time;
      context.clearRect(0, 0, width, height);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.age += delta;
        if (particle.age >= particle.lifetime) {
          particles.splice(index, 1);
          continue;
        }
        particle.x += (particle.targetX - particle.x) * 0.075 + particle.driftX * delta * 0.012;
        particle.y += (particle.targetY - particle.y) * 0.075 + particle.driftY * delta * 0.012;
      }

      for (let first = 0; first < particles.length; first += 1) {
        const particle = particles[first];
        const alpha = Math.max(0, 1 - particle.age / particle.lifetime);
        for (let second = first + 1; second < particles.length; second += 1) {
          const neighbour = particles[second];
          const distance = Math.hypot(particle.x - neighbour.x, particle.y - neighbour.y);
          if (distance >= CONNECTION_DISTANCE) continue;
          const lineAlpha = (1 - distance / CONNECTION_DISTANCE) * Math.min(alpha, 1 - neighbour.age / neighbour.lifetime) * 0.15;
          context.beginPath();
          context.setLineDash([1, 4]);
          context.strokeStyle = `${particle.color}${lineAlpha})`;
          context.lineWidth = 0.7;
          context.moveTo(particle.x, particle.y);
          context.lineTo(neighbour.x, neighbour.y);
          context.stroke();
        }

        context.beginPath();
        context.setLineDash([]);
        context.fillStyle = `${particle.color}${alpha * 0.68})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (particles.length) scheduleFrame();
      else lastFrameTime = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const x = event.clientX;
      const y = event.clientY;
      if (previousPointer && Math.hypot(x - previousPointer.x, y - previousPointer.y) < 9) return;
      previousPointer = { x, y };

      const colors = palette();
      for (let index = 0; index < 2; index += 1) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        const offsetX = (Math.random() - 0.5) * 24;
        const offsetY = (Math.random() - 0.5) * 24;
        particles.push({
          x: x - offsetX * 0.35,
          y: y - offsetY * 0.35,
          targetX: x + offsetX,
          targetY: y + offsetY,
          driftX: (Math.random() - 0.5) * 0.35,
          driftY: (Math.random() - 0.5) * 0.35,
          age: 0,
          lifetime: 780 + Math.random() * 380,
          radius: 0.8 + Math.random() * 0.75,
          color: colors[Math.random() > 0.64 ? 1 : 0],
        });
      }
      scheduleFrame();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        particles.length = 0;
        previousPointer = null;
        context.clearRect(0, 0, width, height);
      } else {
        lastFrameTime = 0;
      }
    };

    const themeObserver = new MutationObserver(() => {
      darkTheme = !document.documentElement.classList.contains('light');
    });

    resizeCanvas();
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      themeObserver.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (frame) window.cancelAnimationFrame(frame);
      particles.length = 0;
      context.clearRect(0, 0, width, height);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-particle-effect" aria-hidden="true" />;
};
