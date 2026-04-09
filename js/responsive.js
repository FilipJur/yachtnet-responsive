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
          
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';

        // Smooth scroll to ensure nav sticks at top for correct menu positioning
        if (isOpen) {
          const header = document.querySelector('header');
          if (header && window.scrollY < header.offsetHeight) {
            window.scrollTo({ top: header.offsetHeight, behavior: 'smooth' });
          }
        }
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
        // Reset body scroll when switching to desktop
        document.body.style.overflow = '';
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
      // Reset body scroll
      document.body.style.overflow = '';
    }
  });
})();

// Note: Detailed search toggle is handled by original desktop JS
// We style both states (closed/open) in the CSS

// ========================================
// TABLE SCROLL WRAPPER (Mobile Only)
// Wraps course tables in scrollable div to prevent section overflow
// ========================================
(function() {
  'use strict';

  const MOBILE_BREAKPOINT = 950;

  function wrapTables() {
    // Only on mobile and only if not already wrapped
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    // Select tables within course columns (specific selector to avoid wrapping all tables)
    const tables = document.querySelectorAll(`
      .courses-river-column > section > table,
      .courses-sea-column > section > table,
      .courses-training-column > section > table,
      .sailors-insurance-column > section > table,
      section.accordion > table,
      section.accordion > div > table,
      .form-accordion-wrapper > table,
      table.cenik-table
    `);

    tables.forEach(function(table) {
      // Skip if already wrapped
      if (table.parentElement.classList.contains('table-scroll-wrapper')) return;

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll-wrapper';

      // Insert wrapper before table
      table.parentNode.insertBefore(wrapper, table);

      // Move table into wrapper
      wrapper.appendChild(table);
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wrapTables);
  } else {
    wrapTables();
  }

  // Re-wrap on resize (in case tables get unwrapped somehow)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(wrapTables, 100);
  });
})();

// ========================================
// DOCK AUTO-HIDE ON SCROLL (Mobile Only)
// Hides the comparison dock when user scrolls near page bottom
// so it doesn't cover pagination or footer content
// ========================================
(function() {
  'use strict';

  var MOBILE_BREAKPOINT = 950;
  var ticking = false;

  function updateDockVisibility() {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    var dock = document.querySelector('.dock');
    if (!dock || dock.classList.contains('is-empty')) return;

    var dockHeight = dock.offsetHeight || 60;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var docHeight = document.documentElement.scrollHeight;
    var distanceFromBottom = docHeight - scrollTop - windowHeight;
    var footer = document.querySelector('footer');
    var footerHeight = footer ? footer.offsetHeight : 0;
    var hideDistance = dockHeight + footerHeight + 40;

    if (distanceFromBottom < hideDistance) {
      dock.classList.add('is-hidden');
    } else {
      dock.classList.remove('is-hidden');
    }
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateDockVisibility();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDockVisibility);
  } else {
    updateDockVisibility();
  }
})();

// ========================================
// SUBMENU TOGGLE (Mobile Only)
// ========================================
(function() {
  'use strict';

  const MOBILE_BREAKPOINT = 950;

  function initSubmenus() {
    // Only on mobile
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const menuItems = document.querySelectorAll('.main-nav > ul > li');

    menuItems.forEach(function(item) {
      const submenu = item.querySelector('ul');
      const link = item.querySelector('a.main-menu-item');

      if (!submenu || !link) return;

      // Skip if already has toggle
      if (item.querySelector('.submenu-toggle')) return;

      // Create toggle button
      const toggle = document.createElement('button');
      toggle.className = 'submenu-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Rozbalit menu');
      toggle.innerHTML = '<span></span>';

      // Insert after link
      link.parentNode.insertBefore(toggle, link.nextSibling);

      // Toggle click handler
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = submenu.classList.toggle('is-open');
        toggle.classList.toggle('is-active');
        toggle.setAttribute('aria-expanded', isExpanded);

        // Close other submenus
        menuItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            const otherSubmenu = otherItem.querySelector('ul');
            const otherToggle = otherItem.querySelector('.submenu-toggle');
            if (otherSubmenu) otherSubmenu.classList.remove('is-open');
            if (otherToggle) {
              otherToggle.classList.remove('is-active');
              otherToggle.setAttribute('aria-expanded', 'false');
            }
          }
        });
      });
    });
  }

  // Initialize
  initSubmenus();

  // Re-init on resize (clean up and rebuild)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // Remove existing toggles
      document.querySelectorAll('.submenu-toggle').forEach(function(t) {
        t.remove();
      });
      // Reset submenus
      document.querySelectorAll('.main-nav ul ul').forEach(function(u) {
        u.classList.remove('is-open');
        u.style.display = ''; // Reset inline styles
      });
      // Re-init
      initSubmenus();
    }, 100);
  });
})();
