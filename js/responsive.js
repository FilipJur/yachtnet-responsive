// Responsive Mobile Menu
(() => {
  const MOBILE_BREAKPOINT = 950;

  const nav = document.querySelector('.main-nav');
  const menu = nav?.querySelector('ul');
  if (!menu) return;

  let hamburger = document.querySelector('.hamburger-menu');

  const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

  const getDock = () => document.querySelector('.dock:not(.is-empty)');

  const createHamburger = () => {
    const btn = document.createElement('button');
    btn.className = 'hamburger-menu';
    btn.setAttribute('aria-label', 'Menu');
    btn.setAttribute('aria-expanded', 'false');
    for (let i = 0; i < 3; i++) {
      btn.appendChild(document.createElement('span'));
    }
    return btn;
  };

  const hideDock = () => getDock()?.classList.add('is-hidden');
  const showDock = () => {
    const dock = getDock();
    if (dock) {
      dock.classList.remove('is-hidden');
      updateDockVisibility();
    }
  };

  const updateHamburger = () => {
    if (isMobile()) {
      if (!hamburger) {
        hamburger = createHamburger();
        nav.insertBefore(hamburger, menu);

        hamburger.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = menu.classList.toggle('is-open');
          hamburger.classList.toggle('is-active');
          hamburger.setAttribute('aria-expanded', isOpen);

          document.body.style.overflow = isOpen ? 'hidden' : '';

          if (isOpen) {
            hideDock();
            const header = document.querySelector('header');
            if (header && window.scrollY < header.offsetHeight) {
              window.scrollTo({ top: header.offsetHeight, behavior: 'smooth' });
            }
          } else {
            showDock();
          }
        });
      }
      hamburger.style.display = '';
    } else {
      if (hamburger) {
        hamburger.style.display = 'none';
        menu.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        showDock();
      }
    }
  };

  updateHamburger();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateHamburger, 100);
  });

  document.addEventListener('click', (e) => {
    if (hamburger && !hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      showDock();
    }
  });
})();

// ========================================
// TABLE SCROLL WRAPPER (Mobile Only)
// ========================================
(() => {
  const MOBILE_BREAKPOINT = 950;

  const SELECTORS = [
    '.sailors-insurance-column > section > table',
    'section.accordion > table',
    'section.accordion > div > table',
    '.form-accordion-wrapper > table',
    'table.cenik-table',
  ].join(',');

  const wrapTables = () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    document.querySelectorAll(SELECTORS).forEach((table) => {
      if (table.parentElement.classList.contains('table-scroll-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll-wrapper';
      table.replaceWith(wrapper);
      wrapper.appendChild(table);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wrapTables);
  } else {
    wrapTables();
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(wrapTables, 100);
  });
})();

// ========================================
// TABLE SCROLL HINT (Mobile Only)
// Shows/hides scroll fade hint based on scroll position
// ========================================
(() => {
  const MOBILE_BREAKPOINT = 950;
  const SCROLL_THRESHOLD = 10;

  const updateHints = () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    document.querySelectorAll('.table-scroll-wrapper').forEach((wrapper) => {
      const { scrollLeft, scrollWidth, clientWidth } = wrapper;
      const atStart = scrollLeft <= SCROLL_THRESHOLD;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - SCROLL_THRESHOLD;

      wrapper.classList.toggle('scroll-start', atStart);
      wrapper.classList.toggle('scroll-end', atEnd);
    });
  };

  const observe = () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;
    document.querySelectorAll('.table-scroll-wrapper').forEach((wrapper) => {
      wrapper.addEventListener('scroll', updateHints, { passive: true });
    });
    updateHints();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(observe, 100);
  });
})();

// ========================================
// DOCK AUTO-HIDE (Mobile Only)
// Hides comparison dock near page bottom and when menu is open
// ========================================
const updateDockVisibility = (() => {
  const MOBILE_BREAKPOINT = 950;
  let ticking = false;

  const update = () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const dock = document.querySelector('.dock');
    if (!dock || dock.classList.contains('is-empty')) return;

    const menu = document.querySelector('.main-nav ul.is-open');
    if (menu) {
      dock.classList.add('is-hidden');
      return;
    }

    const dockHeight = dock.offsetHeight || 60;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = docHeight - scrollTop - windowHeight;
    const footerHeight = document.querySelector('footer')?.offsetHeight ?? 0;
    const hideDistance = dockHeight + footerHeight + 40;

    dock.classList.toggle('is-hidden', distanceFromBottom < hideDistance);
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', update);
  } else {
    update();
  }

  return update;
})();

// ========================================
// SUBMENU TOGGLE (Mobile Only)
// ========================================
(() => {
  const MOBILE_BREAKPOINT = 950;

  const initSubmenus = () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const menuItems = document.querySelectorAll('.main-nav > ul > li');

    menuItems.forEach((item) => {
      const submenu = item.querySelector('ul');
      const link = item.querySelector('a.main-menu-item');
      if (!submenu || !link) return;
      if (item.querySelector('.submenu-toggle')) return;

      const toggle = document.createElement('button');
      toggle.className = 'submenu-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Rozbalit menu');
      toggle.innerHTML = '<span></span>';

      link.after(toggle);

      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = submenu.classList.toggle('is-open');
        toggle.classList.toggle('is-active');
        toggle.setAttribute('aria-expanded', isExpanded);

        menuItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.querySelector('ul')?.classList.remove('is-open');
            const otherToggle = otherItem.querySelector('.submenu-toggle');
            otherToggle?.classList.remove('is-active');
            otherToggle?.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
  };

  initSubmenus();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.querySelectorAll('.submenu-toggle').forEach((t) => t.remove());
      document.querySelectorAll('.main-nav ul ul').forEach((u) => {
        u.classList.remove('is-open');
        u.style.display = '';
      });
      initSubmenus();
    }, 100);
  });
})();

// ========================================
// PAGINATION REORDER (Mobile Only)
// Move "Další lodě" button before pagination on mobile
// ========================================
(() => {
  const MOBILE_BREAKPOINT = 950;

  const reorderPagination = () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const nextPage = document.querySelector('.search-main-column .next-page');
    const paginationControls = document.querySelectorAll('.search-main-column .pagination-control');
    const paginationControl = paginationControls[paginationControls.length - 1];

    if (!nextPage || !paginationControl) return;

    const paginationWrapper = paginationControl.parentElement;
    if (!paginationWrapper) return;

    // Only move if nextPage comes after pagination
    if (nextPage.compareDocumentPosition(paginationWrapper) & Node.DOCUMENT_POSITION_PRECEDING) {
      paginationWrapper.before(nextPage);
    }
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reorderPagination);
  } else {
    reorderPagination();
  }

  // Also run on resize when switching to mobile
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(reorderPagination, 100);
  });
})();
