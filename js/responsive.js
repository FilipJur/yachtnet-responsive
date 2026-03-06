// Responsive Mobile Menu
(function() {
  'use strict';
  
  const hamburger = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.main-nav > ul');
  
  if (!hamburger || !menu) return;
  
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('is-open');
    hamburger.classList.toggle('is-active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Note: Detailed search toggle is handled by original desktop JS
// We style both states (closed/open) in the CSS
