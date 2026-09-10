/**
 * ============================================================
 * AWS STATIC WEBSITE HOSTING PROJECT - CLOUD PORTFOLIO
 * Main JavaScript Controller
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- 1. DOM ELEMENTS SELECTION ---
    const header = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-toggle');
    const navMenu = document.getElementById('nav-menu');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], footer[id]');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const footerBackToTop = document.getElementById('footer-back-to-top');
    const contactForm = document.getElementById('contact-form');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const toastContainer = document.getElementById('toast-container');
    const canvas = document.getElementById('cloud-canvas');

    // --- 2. STICKY NAVBAR & SCROLL BEHAVIOR ---
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Sticky Navbar appearance change
        if (scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Active Navigation Highlighting (ScrollSpy)
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // --- 3. MOBILE HAMBURGER MENU & DRAWER ---
    const toggleMobileMenu = (forceClose = false) => {
        const isOpen = forceClose ? false : !navMenu.classList.contains('open');
        
        hamburgerBtn.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
        navMenu.classList.toggle('open', isOpen);
        drawerOverlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', () => toggleMobileMenu(true));
    }

    // Close mobile menu on clicking any navigation link
    document.querySelectorAll('.nav-link, .nav-mobile-cta a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileMenu(true);
        });
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            toggleMobileMenu(true);
        }
    });

    // --- 4. SMOOTH SCROLLING FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = header.offsetHeight || 76;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (headerHeight + 10);

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top buttons
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (footerBackToTop) {
        footerBackToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 5. SCROLL REVEAL ANIMATIONS (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }

    // --- 6. TOAST NOTIFICATION SYSTEM ---
    const showToast = (title, message, type = 'success', duration = 4500) => {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" aria-label="Close notification">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        toastContainer.appendChild(toast);

        // Animate entrance
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Close on button click
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            dismissToast(toast);
        });

        // Auto dismiss after duration
        setTimeout(() => {
            dismissToast(toast);
        }, duration);
    };

    const dismissToast = (toast) => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentElement) {
                toast.parentElement.removeChild(toast);
            }
        }, 300);
    };

    // --- 7. CONTACT FORM VALIDATION & INTERACTION ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const subjectInput = document.getElementById('contact-subject');
            const messageInput = document.getElementById('contact-message');
            const submitBtn = document.getElementById('contact-submit-btn');

            let isValid = true;

            // Helper to validate field
            const validateField = (input, condition) => {
                const group = input.closest('.form-group');
                if (!condition) {
                    group.classList.add('has-error');
                    isValid = false;
                } else {
                    group.classList.remove('has-error');
                }
            };

            // Validation rules
            validateField(nameInput, nameInput.value.trim().length >= 2);
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            validateField(emailInput, emailRegex.test(emailInput.value.trim()));

            validateField(subjectInput, subjectInput.value.trim().length >= 2);
            validateField(messageInput, messageInput.value.trim().length >= 5);

            // Real-time error removal on input (persistent — works on every re-submit)
            [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
                if (!inp.dataset.listenerAttached) {
                    inp.addEventListener('input', () => {
                        inp.closest('.form-group').classList.remove('has-error');
                    });
                    inp.dataset.listenerAttached = 'true';
                }
            });

            if (isValid) {
                // Button Loading State
                const btnText = submitBtn.querySelector('.btn-text');
                const btnLoading = submitBtn.querySelector('.btn-loading');

                submitBtn.disabled = true;
                btnText.classList.add('d-none');
                btnLoading.classList.remove('d-none');

                // Simulate a short processing delay.
                // NOTE: No backend is connected — this portfolio uses no email service or API.
                // To add real email sending, integrate a service such as:
                //   - AWS SES via API Gateway + Lambda
                //   - EmailJS (emailjs.com)
                //   - Formspree (formspree.io)
                setTimeout(() => {
                    submitBtn.disabled = false;
                    btnText.classList.remove('d-none');
                    btnLoading.classList.add('d-none');

                    // Reset form
                    contactForm.reset();

                    // AUDIT: Toast is honest — no backend is connected
                    showToast(
                        'Form Submitted Locally',
                        'This portfolio has no backend yet. To enable real email delivery, connect AWS SES, EmailJS, or Formspree.',
                        'info',
                        6000
                    );
                }, 1200);
            }
        });
    }

    // --- 8. COPY EMAIL TO CLIPBOARD ---
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = document.getElementById('email-text').textContent.trim();
            
            navigator.clipboard.writeText(emailText).then(() => {
                showToast(
                    'Copied to Clipboard!',
                    emailText,
                    'info',
                    3000
                );
                
                // Icon feedback
                const icon = copyEmailBtn.querySelector('i');
                icon.className = 'fa-solid fa-check text-success';
                setTimeout(() => {
                    icon.className = 'fa-regular fa-copy';
                }, 2000);
            }).catch(() => {
                showToast('Email address', emailText, 'info');
            });
        });
    }

    // --- 9. INTERACTIVE CLOUD PARTICLES & NETWORK CANVAS ---
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.parentElement.offsetWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight;

        let particles = [];
        const particleCount = Math.min(Math.floor((width * height) / 18000), 55);

        // Resize handler
        const handleResize = () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        };
        window.addEventListener('resize', handleResize);

        // Particle Class
        class CloudNode {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1;
                this.vx = (Math.random() - 0.5) * 0.45;
                this.vy = (Math.random() - 0.5) * 0.45;
                this.color = Math.random() > 0.6 ? '#FF9900' : (Math.random() > 0.5 ? '#8B5CF6' : '#00C4FF');
                this.alpha = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce boundaries
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.alpha;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new CloudNode());
        }

        // Animation Loop
        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby nodes
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        const lineAlpha = (1 - dist / 130) * 0.18;
                        ctx.strokeStyle = `rgba(255, 153, 0, ${lineAlpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Update & draw nodes
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            ctx.globalAlpha = 1.0;
            animationFrameId = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Pause animation when hero is off-screen to save GPU/CPU
        if ('IntersectionObserver' in window) {
            const heroSection = document.getElementById('home');
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!animationFrameId) animate();
                    } else {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                });
            });
            if (heroSection) heroObserver.observe(heroSection);
        }
    }

    // Log initialization in console
    console.log('%c☁ AWS Static Website Hosting Project %c| Cloud Portfolio Initialized', 'background:#FF9900; color:#07090E; font-weight:bold; padding:4px 8px; border-radius:4px;', 'color:#FF9900; font-weight:bold;');
});
