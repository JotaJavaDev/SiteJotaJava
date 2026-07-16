document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} - JotaJava.dev`;
  }
});
