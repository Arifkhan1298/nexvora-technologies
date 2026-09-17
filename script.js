/**
 * NEXVORA TECHNOLOGIES — Core Application Engine
 * 100% Offline-First | Zero External Dependencies
 */

(function () {
  'use strict';

  // Master Global Object
  window.Nexvora = window.Nexvora || {};

  /* ==========================================================================
     1. OFFLINE SVG ICONS REPOSITORY
     ========================================================================== */
  const ICONS = {
    check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    arrowRight: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    location: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    mobile: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
    cloud: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
    database: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    cart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
    cpu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
    briefcase: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    users: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    chevronDown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    twitter: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>'
  };

  Nexvora.ICONS = ICONS;

  // Insert SVGs into elements with data-icon attribute
  function renderIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      const iconName = el.getAttribute('data-icon');
      if (ICONS[iconName]) {
        el.innerHTML = ICONS[iconName];
      }
    });
  }

  /* ==========================================================================
     2. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconSvg = ICONS.check;
    if (type === 'error') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
    }

    toast.innerHTML = `<span>${iconSvg}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  Nexvora.showToast = showToast;

  /* ==========================================================================
     3. HEADER & MOBILE NAVIGATION
     ========================================================================== */
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownToggles = document.querySelectorAll('.nav-item-dropdown > a');

    // Sticky Header Scroll
    window.addEventListener('scroll', () => {
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Back to top button
      const backBtn = document.getElementById('back-to-top');
      if (backBtn) {
        if (window.scrollY > 400) {
          backBtn.classList.add('visible');
        } else {
          backBtn.classList.remove('visible');
        }
      }
    }, { passive: true });

    // Mobile Menu Drawer
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        mobileToggle.innerHTML = isOpen ? ICONS.close : ICONS.menu;
      });

      // Close menu on link click
      navMenu.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          mobileToggle.innerHTML = ICONS.menu;
        });
      });

      // Mobile dropdown toggles
      dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          if (window.innerWidth <= 992) {
            e.preventDefault();
            const parent = toggle.closest('.nav-item-dropdown');
            if (parent) parent.classList.toggle('dropdown-open');
          }
        });
      });
    }

    // Back to top smooth scroll
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* ==========================================================================
     4. HERO FUTURISTIC PARTICLES CANVAS (100% VANILLA & LIGHTWEIGHT)
     ========================================================================== */
  function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 22), 65);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(217, 125, 107, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    function animate() {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(197, 168, 128, ${0.28 * (1 - dist / 130)})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        // Draw & update nodes
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
      }

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    });
  }

  /* ==========================================================================
     5. ANIMATED STATS COUNTERS
     ========================================================================== */
  function initCounters() {
    const counterElements = document.querySelectorAll('[data-target-count]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 1800; // ms
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`;
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     6. FAQ ACCORDION
     ========================================================================== */
  function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (question && answer) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Close others
          faqItems.forEach(other => {
            if (other !== item) {
              other.classList.remove('active');
              const otherAns = other.querySelector('.faq-answer');
              if (otherAns) otherAns.style.maxHeight = null;
            }
          });

          if (isActive) {
            item.classList.remove('active');
            answer.style.maxHeight = null;
          } else {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        });
      }
    });
  }

  /* ==========================================================================
     7. PROJECTS FILTERING & SEARCH
     ========================================================================== */
  function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('project-search');

    if (!filterBtns.length && !searchInput) return;

    let activeCategory = 'all';
    let searchQuery = '';

    function applyFilter() {
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const title = (card.querySelector('.project-title')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.project-desc')?.textContent || '').toLowerCase();
        const tech = (card.getAttribute('data-tech') || '').toLowerCase();

        const matchesCat = activeCategory === 'all' || category.includes(activeCategory);
        const matchesQuery = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery) || tech.includes(searchQuery);

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter') || 'all';
        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilter();
      });
    }
  }

  /* ==========================================================================
     8. BLOG FILTERING & SEARCH
     ========================================================================== */
  function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    const searchInput = document.getElementById('blog-search');

    if (!filterBtns.length && !searchInput) return;

    let activeCategory = 'all';
    let searchQuery = '';

    function applyFilter() {
      blogCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const title = (card.querySelector('.blog-title')?.textContent || '').toLowerCase();
        const snippet = (card.querySelector('.blog-snippet')?.textContent || '').toLowerCase();

        const matchesCat = activeCategory === 'all' || category === activeCategory;
        const matchesQuery = !searchQuery || title.includes(searchQuery) || snippet.includes(searchQuery);

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter') || 'all';
        applyFilter();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilter();
      });
    }
  }

  /* ==========================================================================
     9. INTERACTIVE SCOPE & COST ESTIMATOR (quote.html)
     ========================================================================== */
  function initQuoteCalculator() {
    const form = document.getElementById('quote-calc-form');
    const displayPrice = document.getElementById('calc-price');
    const displayTime = document.getElementById('calc-timeline');

    if (!form || !displayPrice) return;

    function calculate() {
      let basePrice = 3000;
      let baseWeeks = 4;

      // Platform type
      const platform = form.querySelector('input[name="platform"]:checked')?.value;
      if (platform === 'web') { basePrice = 3500; baseWeeks = 4; }
      else if (platform === 'mobile') { basePrice = 5500; baseWeeks = 6; }
      else if (platform === 'cross') { basePrice = 8000; baseWeeks = 8; }
      else if (platform === 'saas') { basePrice = 9500; baseWeeks = 10; }
      else if (platform === 'enterprise') { basePrice = 14000; baseWeeks = 12; }

      // Design Tier
      const design = form.querySelector('input[name="design"]:checked')?.value;
      if (design === 'custom') { basePrice += 1800; baseWeeks += 1; }
      else if (design === 'premium3d') { basePrice += 3500; baseWeeks += 2; }

      // Feature Add-ons
      const features = form.querySelectorAll('input[name="features"]:checked');
      features.forEach(feat => {
        const val = feat.value;
        if (val === 'auth') { basePrice += 750; }
        else if (val === 'payment') { basePrice += 1200; baseWeeks += 0.5; }
        else if (val === 'ai') { basePrice += 2400; baseWeeks += 1.5; }
        else if (val === 'chat') { basePrice += 1400; baseWeeks += 1; }
        else if (val === 'analytics') { basePrice += 950; }
        else if (val === 'cms') { basePrice += 1100; }
        else if (val === 'multilang') { basePrice += 650; }
        else if (val === 'bms') { basePrice += 2800; baseWeeks += 2; }
      });

      // Urgency Speed
      const urgency = form.querySelector('input[name="urgency"]:checked')?.value;
      if (urgency === 'accelerated') {
        basePrice = Math.round(basePrice * 1.25);
        baseWeeks = Math.max(2, Math.round(baseWeeks * 0.7));
      } else if (urgency === 'rush') {
        basePrice = Math.round(basePrice * 1.5);
        baseWeeks = Math.max(2, Math.round(baseWeeks * 0.5));
      }

      displayPrice.textContent = `$${basePrice.toLocaleString()}`;
      if (displayTime) {
        displayTime.textContent = `~${Math.round(baseWeeks)} Weeks Delivery`;
      }
    }

    // Attach listeners to all radio & checkboxes
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', () => {
        // Toggle visual selected state on parent cards
        const parentCard = input.closest('.calc-option-card');
        if (parentCard) {
          if (input.type === 'radio') {
            document.querySelectorAll(`input[name="${input.name}"]`).forEach(r => {
              r.closest('.calc-option-card')?.classList.remove('selected');
            });
            parentCard.classList.add('selected');
          } else if (input.type === 'checkbox') {
            parentCard.classList.toggle('selected', input.checked);
          }
        }
        calculate();
      });
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quote-name')?.value.trim();
      const email = document.getElementById('quote-email')?.value.trim();
      const desc = document.getElementById('quote-desc')?.value.trim();

      if (!name || !email) {
        showToast('Please provide your name and work email.', 'error');
        return;
      }

      // Collect data
      const quoteData = {
        name,
        email,
        description: desc,
        platform: form.querySelector('input[name="platform"]:checked')?.value,
        estimatedPrice: displayPrice.textContent,
        estimatedTimeline: displayTime?.textContent,
        date: new Date().toISOString()
      };

      // Store locally (Offline-ready)
      const existingQuotes = JSON.parse(localStorage.getItem('nexvora_quotes') || '[]');
      existingQuotes.push(quoteData);
      localStorage.setItem('nexvora_quotes', JSON.stringify(existingQuotes));

      // Also push to Lead CRM
      const existingLeads = JSON.parse(localStorage.getItem('nexvora_leads') || '[]');
      existingLeads.unshift({
        id: 'LEAD-' + Math.floor(1000 + Math.random() * 9000),
        name,
        company: 'Online Estimate',
        email,
        service: quoteData.platform.toUpperCase(),
        budget: quoteData.estimatedPrice,
        status: 'New',
        date: new Date().toISOString().split('T')[0],
        notes: desc || 'Generated via Project Scope Estimator'
      });
      localStorage.setItem('nexvora_leads', JSON.stringify(existingLeads));

      // Attempt optional API sync
      fetch('api.php?action=quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData)
      }).catch(() => { /* Offline fallback handled */ });

      showToast('Project Estimate & Proposal Request Saved Successfully!', 'success');
      form.reset();
      calculate();
    });

    calculate();
  }

  /* ==========================================================================
     10. CAREERS APPLICATION MODAL & SYSTEM (careers.html)
     ========================================================================== */
  function initCareersModal() {
    const modal = document.getElementById('apply-modal');
    const applyBtns = document.querySelectorAll('.apply-job-btn');
    const closeBtn = document.getElementById('modal-close-apply');
    const positionInput = document.getElementById('app-position');
    const form = document.getElementById('job-application-form');

    if (!modal) return;

    applyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const jobTitle = btn.getAttribute('data-job') || 'Software Engineer';
        if (positionInput) positionInput.value = jobTitle;
        const modalTitle = document.getElementById('apply-modal-title');
        if (modalTitle) modalTitle.textContent = `Apply for ${jobTitle}`;
        modal.classList.add('open');
      });
    });

    function closeModal() {
      modal.classList.remove('open');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('app-name')?.value.trim();
        const email = document.getElementById('app-email')?.value.trim();
        const phone = document.getElementById('app-phone')?.value.trim();
        const pos = positionInput?.value || 'General Application';
        const exp = document.getElementById('app-exp')?.value;
        const cover = document.getElementById('app-cover')?.value.trim();

        if (!fullName || !email || !phone) {
          showToast('Please fill all required fields.', 'error');
          return;
        }

        const appData = {
          id: 'APP-' + Math.floor(1000 + Math.random() * 9000),
          name: fullName,
          email,
          phone,
          position: pos,
          experience: exp,
          cover,
          date: new Date().toISOString().split('T')[0],
          status: 'Review Pending'
        };

        const existingApps = JSON.parse(localStorage.getItem('nexvora_applications') || '[]');
        existingApps.unshift(appData);
        localStorage.setItem('nexvora_applications', JSON.stringify(existingApps));

        // API attempt
        fetch('api.php?action=apply', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(appData)
        }).catch(() => {});

        showToast(`Application for ${pos} submitted successfully!`, 'success');
        form.reset();
        closeModal();
      });
    }
  }

  /* ==========================================================================
     11. CONTACT FORM HANDLER
     ========================================================================== */
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const service = document.getElementById('contact-service')?.value || 'General Inquiry';
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      const inquiryData = {
        name,
        email,
        service,
        message,
        date: new Date().toISOString().split('T')[0]
      };

      const messages = JSON.parse(localStorage.getItem('nexvora_messages') || '[]');
      messages.unshift(inquiryData);
      localStorage.setItem('nexvora_messages', JSON.stringify(messages));

      // Also push to Lead CRM
      const existingLeads = JSON.parse(localStorage.getItem('nexvora_leads') || '[]');
      existingLeads.unshift({
        id: 'LEAD-' + Math.floor(1000 + Math.random() * 9000),
        name,
        company: 'Contact Inquiry',
        email,
        service,
        budget: '$5,000+',
        status: 'New',
        date: new Date().toISOString().split('T')[0],
        notes: message
      });
      localStorage.setItem('nexvora_leads', JSON.stringify(existingLeads));

      // API attempt
      fetch('api.php?action=contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      }).catch(() => {});

      showToast('Thank you! Your message has been received. Our team will contact you shortly.', 'success');
      contactForm.reset();
    });
  }

  /* ==========================================================================
     12. CLIENT DASHBOARD PORTAL (client-dashboard.html)
     ========================================================================== */
  function initClientDashboard() {
    const taskCheckboxes = document.querySelectorAll('.client-task-check');
    const ticketForm = document.getElementById('client-ticket-form');
    const invoiceBtns = document.querySelectorAll('.download-invoice-btn');

    // Task Checklist
    taskCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const item = cb.closest('.task-item');
        if (item) {
          item.classList.toggle('completed', cb.checked);
        }
        showToast(`Task status updated: ${cb.checked ? 'Completed' : 'Pending'}`, 'info');
      });
    });

    // Support Ticket Form
    if (ticketForm) {
      ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = document.getElementById('ticket-subject')?.value.trim();
        const priority = document.getElementById('ticket-priority')?.value || 'Normal';
        const msg = document.getElementById('ticket-msg')?.value.trim();

        if (!subject || !msg) {
          showToast('Please enter subject and description.', 'error');
          return;
        }

        const ticketId = 'TICK-' + Math.floor(1000 + Math.random() * 9000);
        showToast(`Support Ticket #${ticketId} created! An engineer has been assigned.`, 'success');
        ticketForm.reset();
      });
    }

    // Invoice Simulator
    invoiceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const invNum = btn.getAttribute('data-invoice') || 'INV-2026-01';
        showToast(`Downloading offline PDF statement for ${invNum}...`, 'info');
      });
    });
  }

  /* ==========================================================================
     13. ADMIN CRM DASHBOARD (admin-dashboard.html)
     ========================================================================== */
  function initAdminDashboard() {
    const leadsTableBody = document.getElementById('admin-leads-tbody');
    const addLeadForm = document.getElementById('add-lead-form');
    const addLeadModal = document.getElementById('add-lead-modal');
    const openLeadBtn = document.getElementById('open-add-lead-btn');
    const closeLeadBtn = document.getElementById('close-add-lead-btn');
    const filterSelect = document.getElementById('lead-status-filter');
    const searchInput = document.getElementById('lead-search-input');

    if (!leadsTableBody) return;

    // Seed realistic default leads if empty
    let leads = JSON.parse(localStorage.getItem('nexvora_leads') || '[]');
    if (!leads.length) {
      leads = [
        { id: 'LEAD-1081', name: 'Alexander Wright', company: 'Apex BioTech Corp', email: 'alex@apexbio.io', service: 'SaaS Platform', budget: '$28,000', status: 'Proposal', date: '2026-09-12', notes: 'HIPAA compliant cloud analytics portal.' },
        { id: 'LEAD-1082', name: 'Elena Rostova', company: 'Nordic FinTech Ltd', email: 'elena@nordicpay.se', service: 'Mobile Banking', budget: '$42,000', status: 'Negotiation', date: '2026-09-14', notes: 'Cross-platform Flutter banking app with biometric auth.' },
        { id: 'LEAD-1083', name: 'Marcus Chen', company: 'HyperLogistics Global', email: 'marcus@hyperlog.com', service: 'Custom ERP/BMS', budget: '$35,000', status: 'Won', date: '2026-09-08', notes: 'Fleet tracking & automated warehouse inventory.' },
        { id: 'LEAD-1084', name: 'Sarah Jenkins', company: 'Aura Real Estate', email: 'sarah@auraproperties.com', service: 'Web Portal', budget: '$12,500', status: 'Contacted', date: '2026-09-15', notes: 'Interactive 3D virtual tour listings engine.' },
        { id: 'LEAD-1085', name: 'David Miller', company: 'Nova Retail Tech', email: 'david@novamarket.co', service: 'E-Commerce SaaS', budget: '$18,000', status: 'New', date: '2026-09-16', notes: 'Headless Shopify architecture with Next.js frontend.' }
      ];
      localStorage.setItem('nexvora_leads', JSON.stringify(leads));
    }

    function renderLeads() {
      const filterVal = filterSelect ? filterSelect.value : 'all';
      const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';

      leadsTableBody.innerHTML = '';
      const filtered = leads.filter(lead => {
        const matchesStatus = filterVal === 'all' || lead.status === filterVal;
        const matchesQuery = !searchVal || 
          lead.name.toLowerCase().includes(searchVal) || 
          lead.company.toLowerCase().includes(searchVal) ||
          lead.email.toLowerCase().includes(searchVal) ||
          lead.service.toLowerCase().includes(searchVal);
        return matchesStatus && matchesQuery;
      });

      if (!filtered.length) {
        leadsTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color: var(--text-dim); padding: 2rem;">No matching leads found.</td></tr>`;
        return;
      }

      filtered.forEach((lead, idx) => {
        const tr = document.createElement('tr');
        
        let statusBadgeClass = 'badge';
        if (lead.status === 'Won') statusBadgeClass = 'badge badge-emerald';
        else if (lead.status === 'Negotiation') statusBadgeClass = 'badge badge-purple';
        else if (lead.status === 'Proposal') statusBadgeClass = 'badge badge-indigo';
        else if (lead.status === 'Lost') statusBadgeClass = 'badge';

        tr.innerHTML = `
          <td><strong>${lead.id}</strong></td>
          <td>
            <div style="font-weight:600;">${lead.name}</div>
            <div style="font-size:0.8rem; color:var(--text-dim);">${lead.email}</div>
          </td>
          <td>${lead.company}</td>
          <td><span class="tech-tag">${lead.service}</span></td>
          <td><strong style="color:var(--primary); font-family:var(--font-mono);">${lead.budget}</strong></td>
          <td>
            <select class="lead-status-select form-control" data-lead-id="${lead.id}" style="padding:0.3rem 0.6rem; font-size:0.8rem; width:125px;">
              <option value="New" ${lead.status === 'New' ? 'selected' : ''}>New</option>
              <option value="Contacted" ${lead.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
              <option value="Proposal" ${lead.status === 'Proposal' ? 'selected' : ''}>Proposal</option>
              <option value="Negotiation" ${lead.status === 'Negotiation' ? 'selected' : ''}>Negotiation</option>
              <option value="Won" ${lead.status === 'Won' ? 'selected' : ''}>Won</option>
              <option value="Lost" ${lead.status === 'Lost' ? 'selected' : ''}>Lost</option>
            </select>
          </td>
          <td>
            <button class="btn btn-sm btn-outline delete-lead-btn" data-lead-id="${lead.id}" style="padding:0.25rem 0.6rem; font-size:0.75rem; color:#ef4444; border-color:rgba(239,68,68,0.3);">
              Remove
            </button>
          </td>
        `;

        leadsTableBody.appendChild(tr);
      });

      // Status Change Listener
      document.querySelectorAll('.lead-status-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
          const leadId = sel.getAttribute('data-lead-id');
          const newStatus = sel.value;
          const target = leads.find(l => l.id === leadId);
          if (target) {
            target.status = newStatus;
            localStorage.setItem('nexvora_leads', JSON.stringify(leads));
            showToast(`Lead ${leadId} status updated to ${newStatus}`, 'success');
          }
        });
      });

      // Delete Lead Listener
      document.querySelectorAll('.delete-lead-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const leadId = btn.getAttribute('data-lead-id');
          leads = leads.filter(l => l.id !== leadId);
          localStorage.setItem('nexvora_leads', JSON.stringify(leads));
          renderLeads();
          showToast(`Lead ${leadId} removed`, 'info');
        });
      });

      // Update KPI Counter if exists
      const totalLeadsEl = document.getElementById('kpi-total-leads');
      if (totalLeadsEl) totalLeadsEl.textContent = leads.length;
    }

    if (filterSelect) filterSelect.addEventListener('change', renderLeads);
    if (searchInput) searchInput.addEventListener('input', renderLeads);

    // Modal Add Lead
    if (openLeadBtn && addLeadModal) {
      openLeadBtn.addEventListener('click', () => addLeadModal.classList.add('open'));
    }
    if (closeLeadBtn && addLeadModal) {
      closeLeadBtn.addEventListener('click', () => addLeadModal.classList.remove('open'));
    }
    if (addLeadModal) {
      addLeadModal.addEventListener('click', (e) => {
        if (e.target === addLeadModal) addLeadModal.classList.remove('open');
      });
    }

    if (addLeadForm) {
      addLeadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('new-lead-name')?.value.trim();
        const company = document.getElementById('new-lead-company')?.value.trim() || 'Direct';
        const email = document.getElementById('new-lead-email')?.value.trim();
        const service = document.getElementById('new-lead-service')?.value || 'Custom Software';
        const budget = document.getElementById('new-lead-budget')?.value.trim() || '$10,000';
        const status = document.getElementById('new-lead-status')?.value || 'New';
        const notes = document.getElementById('new-lead-notes')?.value.trim() || '';

        if (!name || !email) {
          showToast('Name and email are required.', 'error');
          return;
        }

        const newLead = {
          id: 'LEAD-' + Math.floor(1000 + Math.random() * 9000),
          name,
          company,
          email,
          service,
          budget,
          status,
          date: new Date().toISOString().split('T')[0],
          notes
        };

        leads.unshift(newLead);
        localStorage.setItem('nexvora_leads', JSON.stringify(leads));
        renderLeads();
        showToast(`Lead ${newLead.id} for ${name} added!`, 'success');
        addLeadForm.reset();
        addLeadModal.classList.remove('open');
      });
    }

    renderLeads();
  }

  /* ==========================================================================
     14. SECRET ADMIN SHORTCUT (Ctrl + M + K)
     ========================================================================== */
  function initAdminSecretShortcut() {
    let pressedKeys = new Set();
    let seq = [];
    let timer = null;

    function openAdmin() {
      showToast('Admin Access Authenticated (Ctrl+M+K). Opening Command Center...', 'success');
      setTimeout(() => {
        window.location.href = 'admin-dashboard.html';
      }, 400);
    }

    window.addEventListener('keydown', (e) => {
      const tag = e.target?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return;

      const k = e.key.toLowerCase();
      pressedKeys.add(k);

      // 1. Simultaneous chord: Ctrl held down + both 'm' and 'k' pressed
      if ((e.ctrlKey || e.metaKey) && ((k === 'k' && pressedKeys.has('m')) || (k === 'm' && pressedKeys.has('k')))) {
        e.preventDefault();
        pressedKeys.clear();
        seq = [];
        openAdmin();
        return;
      }

      // 2. Sequential combo: Ctrl+M, then K
      if ((e.ctrlKey || e.metaKey) && k === 'm') {
        seq = ['m'];
        clearTimeout(timer);
        timer = setTimeout(() => { seq = []; }, 3000);
        return;
      }

      if (seq.includes('m') && k === 'k') {
        e.preventDefault();
        seq = [];
        pressedKeys.clear();
        clearTimeout(timer);
        openAdmin();
        return;
      }

      // 3. Sequential combo: Ctrl+K, then M
      if ((e.ctrlKey || e.metaKey) && k === 'k') {
        seq = ['k'];
        clearTimeout(timer);
        timer = setTimeout(() => { seq = []; }, 3000);
        return;
      }

      if (seq.includes('k') && k === 'm') {
        e.preventDefault();
        seq = [];
        pressedKeys.clear();
        clearTimeout(timer);
        openAdmin();
        return;
      }

      // Reset sequence on other non-modifier keys
      if (k !== 'control' && k !== 'meta' && k !== 'shift' && k !== 'alt') {
        seq = [];
      }
    });

    window.addEventListener('keyup', (e) => {
      pressedKeys.delete(e.key.toLowerCase());
    });
  }

  /* ==========================================================================
     15. DOM READY INITIALIZER
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    renderIcons();
    initNavigation();
    initHeroCanvas();
    initCounters();
    initFaq();
    initProjectFilters();
    initBlogFilters();
    initQuoteCalculator();
    initCareersModal();
    initContactForm();
    initClientDashboard();
    initAdminDashboard();
    initAdminSecretShortcut();
  });

})();
