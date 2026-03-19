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

// ========================================
// STICKY NAVIGATION (Mobile Only)
// Nav becomes sticky after scrolling past header
// ========================================
(function() {
  'use strict';
  
  const MOBILE_BREAKPOINT = 950;
  const header = document.querySelector('header');
  const nav = document.querySelector('.main-nav');
  
  if (!header || !nav) return;
  
  let placeholder = null;
  let observer = null;
  const menu = nav.querySelector('ul');
  const hamburger = nav.querySelector('.hamburger-menu');
  
  function createPlaceholder() {
    if (placeholder) return;
    placeholder = document.createElement('div');
    placeholder.className = 'nav-placeholder';
    placeholder.style.height = nav.offsetHeight + 'px';
    placeholder.style.display = 'block';
    nav.parentNode.insertBefore(placeholder, nav);
  }
  
  function removePlaceholder() {
    if (placeholder && placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
      placeholder = null;
    }
  }
  
  function closeMobileMenu() {
    if (menu && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      if (hamburger) {
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    }
  }
  
  function stickNav() {
    if (nav.classList.contains('is-sticky')) return;
    
    // Close mobile menu before sticking
    closeMobileMenu();
    
    createPlaceholder();
    nav.classList.add('is-sticky');
  }
  
  function unstickNav() {
    if (!nav.classList.contains('is-sticky')) return;
    nav.classList.remove('is-sticky');
    removePlaceholder();
  }
  
  function handleIntersection(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      stickNav();
    } else {
      unstickNav();
    }
  }
  
  function initStickyNav() {
    // Only on mobile
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      unstickNav();
      return;
    }
    
    // Already initialized
    if (observer) return;
    
    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
      rootMargin: '0px'
    });
    
    observer.observe(header);
  }
  
  // Initialize
  initStickyNav();
  
  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initStickyNav, 100);
  });
})();

// Note: Detailed search toggle is handled by original desktop JS
// We style both states (closed/open) in the CSS
