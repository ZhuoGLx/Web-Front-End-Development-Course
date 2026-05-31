

(function () {
  const revealSelectors = [
    '.hero',
    'main > section',
    '.page-title',
    '.article-card',
    '.wishlist-panel',
    '.auth-card',
    '.city-detail-page > *',
    '.city-detail-page .detail-float-card',
    '.category-filter-bar',
    '.category-grid > *',
    '.city-card',
    '.route-card',
    '.video-container',
    '.sidebar-card',
    'footer'
  ];

  let lastScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  let scrollDirection = 'down';

  function updateScrollDirection() {
    const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    scrollDirection = currentScrollY >= lastScrollY ? 'down' : 'up';
    lastScrollY = currentScrollY;
  }

  function collectRevealItems() {
    const items = [];
    revealSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!items.includes(el) && !el.classList.contains('hidden')) {
          items.push(el);
        }
      });
    });
    return items;
  }

  function isElementAboveViewport(el) {
    return el.getBoundingClientRect().bottom < 0;
  }

  function isElementBelowViewport(el) {
    return el.getBoundingClientRect().top > window.innerHeight;
  }

  function resetRevealItem(el) {
    el.classList.add('reveal-resetting');
    el.classList.remove('is-visible');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.remove('reveal-resetting');
      });
    });
  }

function initScrollReveal() {
    const items = collectRevealItems();
    items.forEach((el, index) => {
      el.classList.add('scroll-reveal');
      el.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 0.08}s`);
    });

    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          el.dataset.revealedOnce = 'true';
          return;
        }

        if (isElementAboveViewport(el) || isElementBelowViewport(el)) {
          resetRevealItem(el);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px'
    });

    items.forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
