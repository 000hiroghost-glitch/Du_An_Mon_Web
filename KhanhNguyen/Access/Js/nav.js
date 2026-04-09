document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('.hamburger-icon') : null;

    if (mobileMenuBtn && mobileMenu) {
        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !mobileMenu.classList.contains('nav-menu-hidden');

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('nav-menu-hidden') &&
                !mobileMenu.contains(e.target) &&
                !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => closeMenu());
        });
    }

    function openMenu() {
        mobileMenu.classList.remove('nav-menu-hidden');
        mobileMenu.classList.add('nav-menu-open');
        mobileMenuBtn.classList.add('is-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        mobileMenu.classList.add('nav-menu-hidden');
        mobileMenu.classList.remove('nav-menu-open');
        mobileMenuBtn.classList.remove('is-active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    // Navbar scroll effect
    const navbar = document.querySelector('nav[class*="fixed top-0"]');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }
});
