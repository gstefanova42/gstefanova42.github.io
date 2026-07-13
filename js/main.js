const projectModal = document.getElementById('projectModal');

if (projectModal) {
    const modalImage = projectModal.querySelector('.project-modal-image');
    const modalTag = projectModal.querySelector('.project-modal-tag');
  const modalTitle = projectModal.querySelector('.project-modal-title');
  const modalDescription = projectModal.querySelector('.project-modal-description');
  const projectCards = document.querySelectorAll('.project-card[data-image]');
  function openProjectModal(card) {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title || '';
    modalTag.textContent = card.dataset.tag || '';
    modalTitle.textContent = card.dataset.title || '';
    modalDescription.textContent = card.dataset.description || '';
    projectModal.hidden = false;
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeProjectModal() {
    projectModal.hidden = true;
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalImage.src = '';
  }
  projectCards.forEach((card) => {
    card.addEventListener('click', () => openProjectModal(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProjectModal(card);
      }
    });
  });
  projectModal.querySelectorAll('[data-close-modal]').forEach((el) => {
    el.addEventListener('click', closeProjectModal);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !projectModal.hidden) {
      closeProjectModal();
    }
  });
}

const navbarToggle = document.querySelector('.navbar-toggle');
const mainNav = document.getElementById('main-nav');
if (navbarToggle && mainNav) {
  navbarToggle.addEventListener('click', ()=> {
    const isOpen = mainNav.classList.toggle('is-open');
    navbarToggle.classList.toggle('is-active', isOpen);
    navbarToggle.setAttribute('aria-expanded', String(isOpen));
    navbarToggle.setAttribute('aria-label', isOpen ? 'Затвори меню' : 'Отвори меню');
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navbarToggle.classList.remove('is-active');
      navbarToggle.setAttribute('aria-expanded', 'false');
      navbarToggle.setAttribute('aria-label', 'Отвори меню');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((el) => revealObserver.observe(el));
}