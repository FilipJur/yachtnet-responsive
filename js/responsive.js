// Responsive Mobile Menu
(function() {
  'use strict';

  const MOBILE_BREAKPOINT = 950;
  
  const nav = document.querySelector('.main-nav');
  const menu = nav ? nav.querySelector('ul') : null;

  if (!menu) return;

  let hamburger = document.querySelector('.hamburger-menu');
  
  // Function to check if we're on mobile
  function isMobile() {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }
  
  // Function to create hamburger button
  function createHamburger() {
    const btn = document.createElement('button');
    btn.className = 'hamburger-menu';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    
    // Create the three spans for the hamburger icon
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      btn.appendChild(span);
    }
    
    return btn;
  }
  
  // Function to update hamburger visibility based on viewport
  function updateHamburger() {
    if (isMobile()) {
      // Mobile: ensure hamburger exists and is visible
      if (!hamburger) {
        hamburger = createHamburger();
        nav.insertBefore(hamburger, menu);
        
        // Add click handler
        hamburger.addEventListener('click', function(e) {
          e.stopPropagation();
          const isOpen = menu.classList.toggle('is-open');
          hamburger.classList.toggle('is-active');
          hamburger.setAttribute('aria-expanded', isOpen);
        });
      }
      hamburger.style.display = '';
    } else {
      // Desktop: hide hamburger and close menu
      if (hamburger) {
        hamburger.style.display = 'none';
        menu.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  }
  
  // Initial check
  updateHamburger();
  
  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateHamburger, 100);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (hamburger && !hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Note: Detailed search toggle is handled by original desktop JS
// We style both states (closed/open) in the CSS
