import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type WelcomePhase = 'playing' | 'fading' | 'done';

// Keep the intro atmospheric without holding the page hostage.
const INTRO_PLAYBACK_MS = 4_200;
const FADE_OUT_MS = 500;
const SESSION_KEY = 'portfolio-welcome-intro-seen';

export const WelcomeScreen: React.FC = () => {
  const [phase, setPhase] = useState<WelcomePhase>('playing');
  const [hydrated, setHydrated] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const exitStartedRef = useRef(false);
  const initializedRef = useRef(false);
  const skipIntroRef = useRef(false);
  const fadeTimerRef = useRef<number | null>(null);
  const focusBeforeIntroRef = useRef<HTMLElement | null>(null);

  const finishIntro = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setPhase('fading');
    fadeTimerRef.current = window.setTimeout(() => setPhase('done'), FADE_OUT_MS);
  }, []);

  useEffect(() => {
    // React Strict Mode replays effects in development. Guard the session
    // check so that replay cannot mistake this first visit for a return visit.
    if (!initializedRef.current) {
      initializedRef.current = true;
      const forcePreview = new URLSearchParams(window.location.search).get('intro') === '1';
      try {
        if (!forcePreview && window.sessionStorage.getItem(SESSION_KEY) === '1') {
          skipIntroRef.current = true;
          setPhase('done');
          setHydrated(true);
          return;
        }
      } catch {
        // The intro still works when session storage is unavailable.
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        skipIntroRef.current = true;
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
    }

    if (skipIntroRef.current) return;

    focusBeforeIntroRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
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
    if (!hydrated || phase !== 'playing') return;
    const playbackTimer = window.setTimeout(finishIntro, INTRO_PLAYBACK_MS);
    return () => window.clearTimeout(playbackTimer);
  }, [finishIntro, hydrated, phase]);

  useEffect(() => {
    if (phase !== 'done') return;
    focusBeforeIntroRef.current?.focus({ preventScroll: true });
  }, [phase]);

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
      className={`welcome-screen${!hydrated ? ' welcome-screen--preparing' : ''}${gifLoaded ? ' welcome-screen--playing' : ''}${phase === 'fading' ? ' welcome-screen--fading' : ''}`}
      role="dialog"
      aria-modal="false"
      aria-hidden={!hydrated}
      aria-labelledby="welcome-screen-title"
      aria-describedby="welcome-screen-subtitle"
      onKeyDown={(event) => {
        if (event.key === 'Tab' && event.shiftKey && document.activeElement === skipButtonRef.current) {
          event.preventDefault();
          skipButtonRef.current?.blur();
        }
      }}
    >
      <div className="welcome-screen__frame" aria-hidden="true" />
      <div className="welcome-screen__content">
        <div className="welcome-screen__mascot-wrap">
          <Image
            className="welcome-screen__mascot"
            src="/images/mascot/fox-owl-vintage-hacker.gif"
            alt=""
            aria-hidden="true"
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
        <p className="welcome-screen__eyebrow">A PORTFOLIO BY ARPIT KUMAR</p>
        <div className="welcome-screen__loading" aria-hidden="true"><span /></div>
        <p className="welcome-screen__status" aria-live="polite">{gifLoaded ? 'Preparing the experience' : 'Loading the experience'}</p>
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
