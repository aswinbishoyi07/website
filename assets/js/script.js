document.addEventListener('DOMContentLoaded', function() {
    // --- Navigation Overlay (Works on all pages) ---
    const navOpenBtn = document.querySelector('.nav-open-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const navOverlay = document.querySelector('.navigation-overlay');

    if (navOpenBtn) {
        navOpenBtn.addEventListener('click', () => navOverlay.classList.add('is-active'));
    }
    if (navCloseBtn) {
        navCloseBtn.addEventListener('click', () => navOverlay.classList.remove('is-active'));
    }

    // --- Logic for Writing Page ---
    // This code only runs if it finds the article search bar
    if (document.getElementById('article-search')) {
        const articleSearchInput = document.getElementById('article-search');
        const articleFilterButtons = document.querySelectorAll('.filter-container .filter-btn');
        const articleCards = document.querySelectorAll('.article-card-link');
        const articleNoResults = document.querySelector('.article-grid .no-results-message');

        function setupEventListeners(searchInput, filterButtons, cards, noResultsEl) {
            // Filter functionality
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const filter = this.getAttribute('data-filter');
                    filterItems(filter, cards, noResultsEl);
                });
            });

            // Search functionality
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                searchItems(searchTerm, cards, noResultsEl, filterButtons);
            });

            // Check for filter in URL
            const urlParams = new URLSearchParams(window.location.search);
            const filterFromURL = urlParams.get('filter');
            if (filterFromURL) {
                const matchingButton = document.querySelector(`.filter-btn[data-filter="${filterFromURL}"]`);
                if (matchingButton) matchingButton.click();
            }
        }

        function filterItems(category, cards, noResultsEl) {
            let hasVisibleItems = false;
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const shouldShow = (category === 'all' || cardCategory === category);
                card.style.display = shouldShow ? 'block' : 'none';
                if (shouldShow) hasVisibleItems = true;
            });
            if (noResultsEl) noResultsEl.style.display = hasVisibleItems ? 'none' : 'block';
        }

        function searchItems(term, cards, noResultsEl, filterButtons) {
            let hasVisibleItems = false;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            
            cards.forEach(card => {
                const cardContent = card.textContent.toLowerCase();
                const shouldShow = cardContent.includes(term);
                card.style.display = shouldShow ? 'block' : 'none';
                if (shouldShow) hasVisibleItems = true;
            });
            if (noResultsEl) noResultsEl.style.display = hasVisibleItems ? 'none' : 'block';
        }

        setupEventListeners(articleSearchInput, articleFilterButtons, articleCards, articleNoResults);
    }
    
    // --- Logic for Projects Page ---
    // This code only runs if it finds the project search bar
    if (document.getElementById('project-search')) {
        const projectSearchInput = document.getElementById('project-search');
        const projectFilterButtons = document.querySelectorAll('.filter-container .filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        const projectNoResults = document.querySelector('.project-grid .no-results-message');

        function setupEventListeners(searchInput, filterButtons, cards, noResultsEl) {
            // Filter functionality
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const filter = this.getAttribute('data-filter');
                    filterItems(filter, cards, noResultsEl);
                });
            });

            // Search functionality
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                searchItems(searchTerm, cards, noResultsEl, filterButtons);
            });
        }

        function filterItems(category, cards, noResultsEl) {
            let hasVisibleItems = false;
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const shouldShow = (category === 'all' || cardCategory === category);
                card.style.display = shouldShow ? 'block' : 'none';
                if (shouldShow) hasVisibleItems = true;
            });
            if (noResultsEl) noResultsEl.style.display = hasVisibleItems ? 'none' : 'block';
        }

        function searchItems(term, cards, noResultsEl, filterButtons) {
            let hasVisibleItems = false;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            
            cards.forEach(card => {
                const cardContent = card.textContent.toLowerCase();
                const shouldShow = cardContent.includes(term);
                card.style.display = shouldShow ? 'block' : 'none';
                if (shouldShow) hasVisibleItems = true;
            });
            if (noResultsEl) noResultsEl.style.display = hasVisibleItems ? 'none' : 'block';
        }

        setupEventListeners(projectSearchInput, projectFilterButtons, projectCards, projectNoResults);
    }
});

// --- On-Scroll Fade-In Animation Logic ---
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});

const elementsToFadeIn = document.querySelectorAll('.fade-in-element');
elementsToFadeIn.forEach((el) => scrollObserver.observe(el));

// --- Animated Typing Effect ---
document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.getElementById('typing-animation');
    if (typingElement) {
        new TypeIt("#typing-animation", {
            speed: 50,
            startDelay: 900,
            waitUntilVisible: true,
            cursorChar: "▋",
            cursorSpeed: 1200
        }).go();
    }

    // ... (rest of your existing code) ...
});