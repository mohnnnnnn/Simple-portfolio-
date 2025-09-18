// Simple form message display
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMsg').classList.remove('hidden');
  this.reset();
});