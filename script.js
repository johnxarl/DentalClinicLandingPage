// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Basic contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
  });
}

// Modal functionality for services
const serviceItems = document.querySelectorAll('.service-item');
const modals = {
  braces: document.getElementById('modal-braces'),
  checkup: document.getElementById('modal-checkup'),
  cleaning: document.getElementById('modal-cleaning'),
  veneers: document.getElementById('modal-veneers'),
};
const overlay = document.getElementById('modalOverlay');

function openModal(service) {
  if (modals[service]) {
    modals[service].style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}
function closeModal() {
  Object.values(modals).forEach(modal => (modal.style.display = 'none'));
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

serviceItems.forEach(item => {
  item.addEventListener('click', function () {
    const service = this.getAttribute('data-service');
    openModal(service);
  });
});

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', closeModal);
});
overlay.addEventListener('click', closeModal);

// Contact Modal functionality
const bookBtn = document.querySelector('.cta-btn');
const contactModal = document.getElementById('contactModal');
const contactModalOverlay = document.getElementById('contactModalOverlay');
const contactModalClose = document.getElementById('contactModalClose');

function openContactModal() {
  contactModal.style.display = 'block';
  contactModalOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeContactModal() {
  contactModal.style.display = 'none';
  contactModalOverlay.style.display = 'none';
  document.body.style.overflow = '';
}

if (bookBtn) {
  bookBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openContactModal();
  });
}
if (contactModalClose) {
  contactModalClose.addEventListener('click', closeContactModal);
}
if (contactModalOverlay) {
  contactModalOverlay.addEventListener('click', closeContactModal);
}

const contactUsBtn = document.getElementById('contactUsBtn');
if (contactUsBtn) {
  contactUsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openContactModal();
  });
}

// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', function() {
    const item = this.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) openItem.classList.remove('open');
    });
    item.classList.toggle('open', !isOpen);
  });
});

// Section scroll-in animation
const animatedSections = document.querySelectorAll('.about, .services, .testimonials, .contact');
animatedSections.forEach(section => section.classList.add('section-animate'));

function revealSectionsOnScroll() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('load', revealSectionsOnScroll);

// Policy modals functionality
const privacyLink = document.getElementById('privacyLink');
const termsLink = document.getElementById('termsLink');
const privacyModal = document.getElementById('privacyModal');
const termsModal = document.getElementById('termsModal');
const privacyModalOverlay = document.getElementById('privacyModalOverlay');
const termsModalOverlay = document.getElementById('termsModalOverlay');
const privacyModalClose = document.getElementById('privacyModalClose');
const termsModalClose = document.getElementById('termsModalClose');

function openPolicyModal(modal, overlay) {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closePolicyModals() {
  privacyModal.style.display = 'none';
  termsModal.style.display = 'none';
  privacyModalOverlay.style.display = 'none';
  termsModalOverlay.style.display = 'none';
  document.body.style.overflow = '';
}
if (privacyLink) {
  privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    closePolicyModals();
    openPolicyModal(privacyModal, privacyModalOverlay);
  });
}
if (termsLink) {
  termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    closePolicyModals();
    openPolicyModal(termsModal, termsModalOverlay);
  });
}
if (privacyModalClose) privacyModalClose.addEventListener('click', closePolicyModals);
if (termsModalClose) termsModalClose.addEventListener('click', closePolicyModals);
if (privacyModalOverlay) privacyModalOverlay.addEventListener('click', closePolicyModals);
if (termsModalOverlay) termsModalOverlay.addEventListener('click', closePolicyModals);
