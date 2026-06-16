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

  /* ==========================================================================
     2. Glimpse Demo Interaction
     ========================================================================== */
  const btnSize = document.getElementById('btn-glimpse-size');
  const btnFocus = document.getElementById('btn-glimpse-focus');
  const readerPane = document.getElementById('glimpse-reader-pane');
  const readerText = document.getElementById('glimpse-text-content');
  const focusRuler = document.getElementById('glimpse-ruler');

  // Toggle Font Size
  btnSize.addEventListener('click', () => {
    readerText.classList.toggle('large');
    btnSize.classList.toggle('active');
  });

  // Toggle Focus Ruler
  btnFocus.addEventListener('click', () => {
    const isActive = focusRuler.classList.toggle('active');
    btnFocus.classList.toggle('active');
    
    if (isActive) {
      // Position ruler at middle initially
      focusRuler.style.top = `${readerPane.clientHeight / 2 - 16}px`;
    }
  });

  // Move Focus Ruler with mouse
  readerPane.addEventListener('mousemove', (e) => {
    if (!focusRuler.classList.contains('active')) return;
    
    const rect = readerPane.getBoundingClientRect();
    const y = e.clientY - rect.top + readerPane.scrollTop;
    
    // Constraint ruler within the bounds of the pane
    const minY = 0;
    const maxY = readerPane.scrollHeight - 32;
    const boundedY = Math.max(minY, Math.min(y - 16, maxY));
    
    focusRuler.style.top = `${boundedY}px`;
  });

  /* ==========================================================================
     3. FitLab Demo Interaction
     ========================================================================== */
  const btnShirt = document.getElementById('btn-fitlab-shirt');
  const btnJacket = document.getElementById('btn-fitlab-jacket');
  const layerShirt = document.getElementById('fitlab-garment-shirt');
  const layerJacket = document.getElementById('fitlab-garment-jacket');
  const fitlabWorkspace = document.querySelector('.fitlab-workspace');

  // Garment Toggles
  btnShirt.addEventListener('click', () => {
    if (btnShirt.classList.contains('active')) return;
    
    btnShirt.classList.add('active');
    btnJacket.classList.remove('active');
    
    layerShirt.classList.add('active');
    layerJacket.classList.remove('active');
  });

  btnJacket.addEventListener('click', () => {
    if (btnJacket.classList.contains('active')) return;
    
    btnJacket.classList.add('active');
    btnShirt.classList.remove('active');
    
    layerJacket.classList.add('active');
    layerShirt.classList.remove('active');
  });

  // Dynamic tracking simulation (wiggle points slightly on mouse hover)
  fitlabWorkspace.addEventListener('mousemove', (e) => {
    const rect = fitlabWorkspace.getBoundingClientRect();
    // Normalize coordinates to -1 to +1 relative to center
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Distort SVGs slightly to simulate active tracking camera input
    const displacementX = x * 3; // Max 3px movement
    const displacementY = y * 2; // Max 2px movement

    const activeGarment = document.querySelector('.garment-layer.active');
    if (activeGarment) {
      activeGarment.style.transform = `translate(${displacementX}px, ${displacementY}px)`;
    }
    
    const modelBody = document.querySelector('.fitlab-model');
    if (modelBody) {
      modelBody.style.transform = `translate(${displacementX * 0.3}px, ${displacementY * 0.3}px)`;
    }
  });

  fitlabWorkspace.addEventListener('mouseleave', () => {
    const activeGarment = document.querySelector('.garment-layer.active');
    if (activeGarment) activeGarment.style.transform = '';
    
    const modelBody = document.querySelector('.fitlab-model');
    if (modelBody) modelBody.style.transform = '';
  });

  /* ==========================================================================
     4. AI OCR Demo Interaction
     ========================================================================== */
  const ocrTargets = document.querySelectorAll('.ocr-target');

  ocrTargets.forEach(target => {
    const fieldName = target.getAttribute('data-field');
    const jsonValueNode = document.getElementById(`val-${fieldName}`);

    target.addEventListener('mouseenter', () => {
      target.classList.add('active');
      if (jsonValueNode) {
        jsonValueNode.classList.add('highlighted');
      }
    });

    target.addEventListener('mouseleave', () => {
      target.classList.remove('active');
      if (jsonValueNode) {
        jsonValueNode.classList.remove('highlighted');
      }
    });
  });
});
