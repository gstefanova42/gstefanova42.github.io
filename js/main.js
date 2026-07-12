const projectModal = document.getElementById('projectModal');

if (projectModal) {
    const modalImage = projectModal.querySelector('.project-modal-image');
    const modalTag = projectModal.querySelector('.project-modal-tag');
  const modalTitle = projectModal.querySelector('.project-modal-title');
  const modalDescription = projectModal.querySelector('.project-modal-description');
  const projectCards = document.querySelectorAll('.projects-page .project-card[data-image]');
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
