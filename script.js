 function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
  }

  // Fechar menu ao clicar em um link
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar a');
    const navbar = document.getElementById('navbar');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  });
