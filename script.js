// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

// Default to light mode
body.classList.add('light-mode');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  document.getElementById('mainHeader').classList.toggle('dark-mode');
  document.getElementById('mainHeader').classList.toggle('light-mode');

  document.querySelector('.hero').classList.toggle('dark-mode');
  document.querySelector('.hero').classList.toggle('light-mode');

  document.querySelector('.hero-button').classList.toggle('dark-mode');

  // Toggle the icon
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});


// ===== Back to Top Button =====
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ===== Modal =====
const skillsModal = document.getElementById("skillsModal");
const skillsLink = document.getElementById("skillsLink");
const closeBtn = document.querySelector(".close-btn");

// Open modal
skillsLink.addEventListener("click", (e) => {
  e.preventDefault();
  skillsModal.style.display = "block";
  skillsModal.setAttribute("aria-hidden", "false");
  closeBtn.focus();
});

// Close modal via button
closeBtn.addEventListener("click", () => {
  skillsModal.style.display = "none";
  skillsModal.setAttribute("aria-hidden", "true");
  skillsLink.focus();
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === skillsModal) {
    skillsModal.style.display = "none";
    skillsModal.setAttribute("aria-hidden", "true");
    skillsLink.focus();
  }
});

// Close modal with ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && skillsModal.style.display === "block") {
    skillsModal.style.display = "none";
    skillsModal.setAttribute("aria-hidden", "true");
    skillsLink.focus();
  }
});


// ===== Contact Form =====
function showConfirmation(event) {
  event.preventDefault();

  alert("Your message has been sent!"); // Show alert popup

  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.removeAttribute("hidden"); // Show message
  confirmationMessage.scrollIntoView({ behavior: "smooth" });

  // Reset form after 4 seconds
  const form = document.querySelector(".contact-form");
  setTimeout(() => {
    form.reset();
    confirmationMessage.setAttribute("hidden", "true"); // Hide message
  }, 4000);
}

// Attach event listener from JS instead of inline HTML
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", showConfirmation);
