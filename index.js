document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Scroll-Driven Animations Fallback
     ========================================================================== */
  const supportsScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
  
  if (!supportsScrollTimeline) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, we don't need to observe it anymore
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select elements to reveal
    const revealElements = document.querySelectorAll('.section, .project-card, .philosophy-card, .tech-layout');
    
    revealElements.forEach(el => {
      el.classList.add('js-reveal');
      revealObserver.observe(el);
    });
  }
});
