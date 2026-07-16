document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} - JotaJava.dev`;
  }

  const tabs = document.querySelectorAll('.project-tab');
  const cards = document.querySelectorAll('.project[data-project]');

  function activateProject(projectId) {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.project === projectId);
    });
    cards.forEach((card) => {
      card.classList.toggle('active', card.dataset.project === projectId);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activateProject(tab.dataset.project);
    });
  });

  if (tabs.length) {
    activateProject(tabs[0].dataset.project);
  }
});
