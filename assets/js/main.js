const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('back-to-top');
const navLinks = [...document.querySelectorAll('.nav-menu a')];
const sections = [...document.querySelectorAll('section[id]')];
const loader = document.getElementById('loader-screen');
const themeToggle = document.getElementById('theme-toggle');
const typingRole = document.getElementById('typing-role');
const projectModal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');
const modalLink = document.getElementById('modal-link');

window.addEventListener('load', () => {
  window.setTimeout(() => loader?.classList.add('hidden'), 450);
});

try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
} catch (error) {
  console.warn('Theme preference is unavailable in this browser context.');
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  try {
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  } catch (error) {
    console.warn('Theme preference could not be saved.');
  }
  themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

const roles = ['Full Stack Developer', 'Flutter Developer', 'IoT Innovator', 'AI Explorer'];
let roleIndex = 0;

if (!prefersReducedMotion) {
  const updateRole = () => {
    // Slide down and fade out current text
    typingRole.style.animation = 'slideDownFade 0.3s ease-in forwards';

    setTimeout(() => {
      // Update text
      roleIndex = (roleIndex + 1) % roles.length;
      typingRole.textContent = roles[roleIndex];

      // Reset animation and slide up with fade in
      typingRole.style.animation = 'none';
      setTimeout(() => {
        typingRole.style.animation = 'slideUpFade 0.3s ease-out forwards';
      }, 10);
    }, 300);
  };

  // Initial animation setup
  typingRole.style.animation = 'slideUpFade 0.3s ease-out forwards';

  // Update every 2.5 seconds (0.3s down + 0.3s up + 1.9s pause)
  window.setInterval(updateRole, 2500);
}

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
    target.focus({ preventScroll: true });
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

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.count);
      const duration = prefersReducedMotion ? 0 : 900;
      const start = performance.now();

      const animate = (now) => {
        const progress = duration ? Math.min((now - start) / duration, 1) : 1;
        counter.textContent = `${Math.round(target * progress)}+`;
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.7 },
);

document.querySelectorAll('[data-count]').forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    document.querySelectorAll('.filter-btn').forEach((item) => {
      item.classList.toggle('active', item === button);
    });

    document.querySelectorAll('.project-card').forEach((card) => {
      const categories = card.dataset.category || '';
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

const openProjectModal = (card) => {
  const title = card.querySelector('h3')?.textContent || 'Project';
  const description = card.querySelector('p')?.textContent || '';
  const tags = [...card.querySelectorAll('.tags span')].map((tag) => tag.textContent);
  const link = card.querySelector('a[href]')?.href || '#';

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalTags.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join('');
  modalLink.href = link;
  projectModal.hidden = false;
  modalClose.focus();
};

document.querySelectorAll('.project-card').forEach((card) => {
  card.tabIndex = 0;
  card.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    openProjectModal(card);
  });
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') openProjectModal(card);
  });
});

const closeProjectModal = () => {
  projectModal.hidden = true;
};

modalClose.addEventListener('click', closeProjectModal);
projectModal.addEventListener('click', (event) => {
  if (event.target === projectModal) closeProjectModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !projectModal.hidden) closeProjectModal();
});

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
