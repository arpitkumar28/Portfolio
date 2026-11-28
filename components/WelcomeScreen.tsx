import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type WelcomePhase = 'playing' | 'fading' | 'done';

// The supplied GIF is nine 1-second frames. The extra 300ms lets its final
// frame settle before the overlay begins fading away.
const GIF_PLAYBACK_MS = 9_000;
const FINAL_FRAME_HOLD_MS = 300;
const FADE_OUT_MS = 700;
const SESSION_KEY = 'portfolio-welcome-intro-seen';

export const WelcomeScreen: React.FC = () => {
  const [phase, setPhase] = useState<WelcomePhase>('playing');
  const [hydrated, setHydrated] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const exitStartedRef = useRef(false);
  const fadeTimerRef = useRef<number | null>(null);

  const finishIntro = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setPhase('fading');
    fadeTimerRef.current = window.setTimeout(() => setPhase('done'), FADE_OUT_MS);
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === '1') {
        setPhase('done');
        setHydrated(true);
        return;
      }
    } catch {
      // The intro still works when session storage is unavailable.
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      try {
        window.sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // Keep the page usable when session storage is unavailable.
      }
      setPhase('done');
      setHydrated(true);
      return;
    }

    try {
      // Mark it before playback so a refresh or route change never restarts it.
      window.sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // The mounted app still prevents repeats during this navigation session.
    }

    setHydrated(true);
    skipButtonRef.current?.focus({ preventScroll: true });
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishIntro]);

  useEffect(() => {
    if (!hydrated || phase !== 'playing' || !gifLoaded) return;
    const playbackTimer = window.setTimeout(
      finishIntro,
      GIF_PLAYBACK_MS + FINAL_FRAME_HOLD_MS,
    );
    return () => window.clearTimeout(playbackTimer);
  }, [finishIntro, gifLoaded, hydrated, phase]);

  useEffect(() => {
    if (!hydrated || phase === 'done') return;
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
    };
  }, [hydrated, phase]);

  useEffect(() => () => {
    if (fadeTimerRef.current !== null) window.clearTimeout(fadeTimerRef.current);
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`welcome-screen${!hydrated ? ' welcome-screen--preparing' : ''}${phase === 'fading' ? ' welcome-screen--fading' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!hydrated}
      aria-labelledby="welcome-screen-title"
      aria-describedby="welcome-screen-subtitle"
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          event.preventDefault();
          skipButtonRef.current?.focus();
        }
      }}
    >
      <div className="welcome-screen__frame" aria-hidden="true" />
      <div className="welcome-screen__content">
        <p className="welcome-screen__eyebrow">A secure workspace is booting</p>
        <div className="welcome-screen__mascot-wrap">
          <Image
            className="welcome-screen__mascot"
            src="/images/mascot/fox-owl-vintage-hacker.gif"
            alt="Animated fox and owl hackers working together at a vintage computer"
            width={508}
            height={334}
            sizes="(max-width: 600px) 86vw, 508px"
            priority
            unoptimized
            onLoad={() => setGifLoaded(true)}
            onError={finishIntro}
          />
        </div>
        <h1 id="welcome-screen-title" className="welcome-screen__title">BUILD. BREAK. SECURE.</h1>
        <p id="welcome-screen-subtitle" className="welcome-screen__subtitle">Welcome to Arpit&apos;s Portfolio</p>
        <div className="welcome-screen__loading" aria-hidden="true"><span /></div>
      </div>
      <button
        ref={skipButtonRef}
        tabIndex={hydrated ? 0 : -1}
        className="welcome-screen__skip"
        type="button"
        onClick={finishIntro}
        aria-label="Skip the welcome intro"
      >
        Skip Intro <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
};
