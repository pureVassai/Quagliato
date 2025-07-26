// GSAP Animations and Interactions
gsap.registerPlugin(ScrollTrigger);

// Loading Screen
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
                        initAnimations();
                    }
                });
            }, 500);
        }
        loadingProgress.style.width = progress + '%';
    }, 200);
});

// Initialize all animations
function initAnimations() {
    // Hero section animations
    animateHero();
    
    // Timeline animations
    animateTimeline();
    
    // Empreendimentos cards animations
    animateCards();
    
    // Parallax effects
    initParallax();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Mobile navigation
    initMobileNav();
    
    // Form interactions
    initFormInteractions();
    
    // Hotspot interactions
    initHotspotInteractions();
}

// Hero Section Animations
function animateHero() {
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

// Timeline Animations
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Empreendimentos Cards Animations
function animateCards() {
    const cards = document.querySelectorAll('.empreendimento-card');
    
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
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Parallax Effects
function initParallax() {
    // Hero background parallax
    gsap.to('.hero-background', {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Section backgrounds parallax
    gsap.to('.historia', {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
            trigger: ".historia",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
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
}

// Form Interactions
function initFormInteractions() {
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

// Hotspot Interactions
function initHotspotInteractions() {
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        const marker = hotspot.querySelector('.hotspot-marker');
        const info = hotspot.querySelector('.hotspot-info');
        
        // Hover effects
        hotspot.addEventListener('mouseenter', () => {
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
        
        hotspot.addEventListener('mouseleave', () => {
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
function animateStats() {
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

// Initialize stats animation
animateStats();

// Cursor effects (optional premium touch)
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--color-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.5;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
    `;
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 100);
});

// Add some premium micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .hero-cta, .form-submit');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization
window.addEventListener('load', () => {
    // Preload critical images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Site error:', e.error);
});

// Console welcome message
console.log(`
%cFamília Quagliato
%cSite Institucional Premium
%cDesenvolvido com tecnologias modernas e design sofisticado
`, 
'color: #d4af37; font-size: 24px; font-weight: bold;',
'color: #ffffff; font-size: 16px;',
'color: #b8b8b8; font-size: 12px;'
); 