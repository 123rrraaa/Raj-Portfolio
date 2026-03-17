// ============================================
// RESUME — Interactive Enhancements
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Floating Particles ----------
    const particlesContainer = document.getElementById('particles');
    const PARTICLE_COUNT = 25;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (8 + Math.random() * 15) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }

    // ---------- Scroll-triggered Animations ----------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // ---------- Tilt effect on hero ----------
    const hero = document.getElementById('hero');
    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            hero.style.transform = `perspective(800px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
        });

        hero.addEventListener('mouseleave', () => {
            hero.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
            hero.style.transition = 'transform 0.5s ease-out';
        });

        hero.addEventListener('mouseenter', () => {
            hero.style.transition = 'none';
        });
    }

    // ---------- Smooth reveal on page load ----------
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.6s ease-out';
        document.body.style.opacity = '1';
    });

    // ---------- Strength Concept Modal ----------
    const modal = document.getElementById('strengthModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.strength-item.clickable').forEach(item => {
        item.addEventListener('click', () => {
            const concept = item.getAttribute('data-concept');
            const icon = item.querySelector('.strength-icon').textContent;
            const title = item.querySelector('span').textContent;

            modalIcon.textContent = icon;
            modalTitle.textContent = title;
            modalDescription.textContent = concept;
            modal.classList.add('active');
        });
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });

});
