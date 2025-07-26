// Mobile JavaScript para Família Quagliato
gsap.registerPlugin(ScrollTrigger);

// Loading Screen Mobile
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide loading screen after completion
            setTimeout(() => {
                gsap.to(loadingScreen, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => {
                        loadingScreen.style.display = 'none';
                        initMobileAnimations();
                    }
                });
            }, 500);
        }
        loadingProgress.style.width = progress + '%';
    }, 200);
});

// Initialize mobile animations
function initMobileAnimations() {
    // Hero section animations
    animateMobileHero();
    
    // Timeline animations
    animateMobileTimeline();
    
    // Empreendimentos slider
    initMobileSlider();
    
    // Touch interactions
    initTouchInteractions();
    
    // Mobile navigation
    initMobileNav();
    
    // Form interactions
    initMobileFormInteractions();
    
    // Hotspot interactions
    initMobileHotspotInteractions();
    
    // Scroll effects
    initMobileScrollEffects();
}

// Mobile Hero Animations
function animateMobileHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Stagger animation for title lines
    gsap.fromTo('.title-line', 
        { opacity: 0, y: 30 },
        { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power2.out",
            stagger: 0.2,
            delay: 0.5
        }
    );
    
    // Subtitle animation
    gsap.fromTo(heroSubtitle,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.5 }
    );
    
    // CTA button animation
    gsap.fromTo(heroCta,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.7 }
    );
    
    // Scroll indicator animation
    gsap.fromTo(scrollIndicator,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out", delay: 2 }
    );
}

// Mobile Timeline Animations
function animateMobileTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Mobile Slider for Empreendimentos
function initMobileSlider() {
    const slider = document.querySelector('.empreendimentos-slider');
    const cards = document.querySelectorAll('.empreendimento-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Initialize cards
    cards.forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 15%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Touch/swipe functionality
    let startX = 0;
    let endX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentSlide < cards.length - 1) {
                // Swipe left - next slide
                currentSlide++;
            } else if (diff < 0 && currentSlide > 0) {
                // Swipe right - previous slide
                currentSlide--;
            }
            updateSlider();
        }
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    function updateSlider() {
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Animate cards
        cards.forEach((card, index) => {
            const isActive = index === currentSlide;
            gsap.to(card, {
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.7,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
    
    // Auto-advance slider
    setInterval(() => {
        currentSlide = (currentSlide + 1) % cards.length;
        updateSlider();
    }, 5000);
}

// Touch Interactions
function initTouchInteractions() {
    // Add touch feedback to interactive elements
    const touchElements = document.querySelectorAll('.empreendimento-card, .historia-block, .hero-cta, .form-submit');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            gsap.to(element, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out"
            });
        });
        
        element.addEventListener('touchend', () => {
            gsap.to(element, {
                scale: 1,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    });
}

// Mobile Navigation
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            gsap.to(spans[0], { rotation: 45, y: 8, duration: 0.3 });
            gsap.to(spans[1], { opacity: 0, duration: 0.3 });
            gsap.to(spans[2], { rotation: -45, y: -8, duration: 0.3 });
        } else {
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });
}

// Mobile Form Interactions
function initMobileFormInteractions() {
    const form = document.querySelector('.contato-form');
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    // Input focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        
        // Animate button
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            ease: "power2.out",
            onComplete: () => {
                submitBtn.textContent = 'Enviando...';
                gsap.to(submitBtn, {
                    scale: 1,
                    duration: 0.1,
                    ease: "power2.out"
                });
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.textContent = 'Mensagem Enviada!';
                    gsap.to(submitBtn, {
                        backgroundColor: '#27ae60',
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Reset form
                    setTimeout(() => {
                        form.reset();
                        submitBtn.textContent = originalText;
                        gsap.to(submitBtn, {
                            backgroundColor: '#d4af37',
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }, 2000);
                }, 1500);
            }
        });
    });
}

// Mobile Hotspot Interactions
function initMobileHotspotInteractions() {
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        const marker = hotspot.querySelector('.hotspot-marker');
        const info = hotspot.querySelector('.hotspot-info');
        
        // Touch interactions
        hotspot.addEventListener('touchstart', () => {
            gsap.to(marker, {
                scale: 1.2,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(info, {
                opacity: 1,
                visibility: "visible",
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        hotspot.addEventListener('touchend', () => {
            gsap.to(marker, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(info, {
                opacity: 0,
                visibility: "hidden",
                y: 10,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Mobile Scroll Effects
function initMobileScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            gsap.to(navbar, {
                backgroundColor: 'rgba(10, 10, 10, 0.98)',
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            gsap.to(navbar, {
                backgroundColor: 'rgba(10, 10, 10, 0.95)',
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });
    
    // Section reveal animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Statistics counter animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const suffix = stat.textContent.replace(/\d/g, '');
        
        gsap.fromTo(stat,
            { textContent: 0 },
            {
                textContent: target,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: stat,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function() {
                    stat.textContent = Math.floor(this.targets()[0].textContent) + suffix;
                }
            }
        );
    });
}

// Smooth scrolling for mobile
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize smooth scrolling
initSmoothScrolling();

// Performance optimizations for mobile
function optimizeForMobile() {
    // Reduce animation complexity on low-end devices
    const isLowEndDevice = navigator.hardwareConcurrency <= 2;
    
    if (isLowEndDevice) {
        // Disable complex animations
        gsap.globalTimeline.timeScale(0.5);
        
        // Reduce blur effects
        const glassElements = document.querySelectorAll('[style*="backdrop-filter"]');
        glassElements.forEach(element => {
            element.style.backdropFilter = 'none';
            element.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        });
    }
    
    // Optimize for touch devices
    if ('ontouchstart' in window) {
        // Increase touch targets
        const touchTargets = document.querySelectorAll('button, a, .hotspot');
        touchTargets.forEach(target => {
            target.style.minHeight = '44px';
            target.style.minWidth = '44px';
        });
    }
}

// Call optimization function
optimizeForMobile();

// Error handling for mobile
window.addEventListener('error', (e) => {
    console.error('Mobile site error:', e.error);
});

// Console welcome message for mobile
console.log(`
%cFamília Quagliato
%cSite Mobile Premium
%cOtimizado para dispositivos móveis
`, 
'color: #d4af37; font-size: 20px; font-weight: bold;',
'color: #ffffff; font-size: 14px;',
'color: #b8b8b8; font-size: 10px;'
); 