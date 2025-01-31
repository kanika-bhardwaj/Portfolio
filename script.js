document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
