// Responsive Mobile Menu
(function() {
  'use strict';

  const nav = document.querySelector('.main-nav');
  const menu = nav ? nav.querySelector('ul') : null;

  if (!menu) return;

  // Check if hamburger already exists
  let hamburger = document.querySelector('.hamburger-menu');

  // Inject hamburger if not present
  if (!hamburger && nav) {
    hamburger = document.createElement('button');
    hamburger.className = 'hamburger-menu';
    hamburger.setAttribute('aria-label', 'Menu');
    hamburger.setAttribute('aria-expanded', 'false');

    // Create the three spans for the hamburger icon
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      hamburger.appendChild(span);
    }

    // Insert before the menu
    nav.insertBefore(hamburger, menu);
  }

  if (!hamburger) return;
  
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
