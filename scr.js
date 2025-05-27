
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;
  const header = document.getElementById('mainHeader');
  const hero = document.querySelector('.hero');
  const button = document.querySelector('.hero-button');
  const backToTopBtn = document.getElementById("backToTop");


  // Default to light mode
  body.classList.add('light-mode');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    header.classList.toggle('dark-mode');
    header.classList.toggle('light-mode');

    hero.classList.toggle('dark-mode');
    hero.classList.toggle('light-mode');

    button.classList.toggle('dark-mode');

    // Toggle the icon
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️'; // Sun for light
    } else {
      toggleBtn.textContent = '🌙'; // Moon for dark
    }
  });

  //top button:
   window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

