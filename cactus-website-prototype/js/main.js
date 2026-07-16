/* ═══════════════════════════════════════════════════════
   CACTUS INFORMATIQUE — Main JavaScript
   Scroll reveals, animated counters, header shrink, menu
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ── SCROLL REVEAL (Intersection Observer) ──
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ── ANIMATED COUNTERS ──
    const counterElements = document.querySelectorAll('[data-count]');
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(el => counterObserver.observe(el));
    }

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            el.textContent = prefix + current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    // ── HEADER SHRINK ON SCROLL ──
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollY = 0;
        let ticking = false;

        function updateHeader() {
            if (window.scrollY > 50) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }

    // ── MOBILE MENU TOGGLE ──
    const menuToggle = document.querySelector('.header__toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIconOpen = document.querySelector('.icon-menu');
    const menuIconClose = document.querySelector('.icon-close');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', isOpen);

            if (menuIconOpen && menuIconClose) {
                menuIconOpen.style.display = isOpen ? 'none' : 'block';
                menuIconClose.style.display = isOpen ? 'block' : 'none';
            }

            // Prevent body scroll when menu is open
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                if (menuIconOpen && menuIconClose) {
                    menuIconOpen.style.display = 'block';
                    menuIconClose.style.display = 'none';
                }
            });
        });
    }

    // ── SMOOTH SCROLL FOR ANCHOR LINKS ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
