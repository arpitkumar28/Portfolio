const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('back-to-top');
const navLinks = [...document.querySelectorAll('.nav-menu a')];
const sections = [...document.querySelectorAll('section[id]')];

const closeMenu = () => {
  navMenu.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
};

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    closeMenu();
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

let ticking = false;

const updateOnScroll = () => {
  const scrollY = window.scrollY;
  backToTop.classList.toggle('visible', scrollY > 420);

  const activeSection = sections.filter((section) => scrollY + 120 >= section.offsetTop).at(-1);
  if (activeSection) {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${activeSection.id}`);
    });
  }

  ticking = false;
};

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  },
  { passive: true },
);

updateOnScroll();

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
  window.location.href = `mailto:arpitkumar0211@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
