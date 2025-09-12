// Movie data with categories and types
const movies = [
    {
        id: 1,
        title: "Stranger Things",
        type: "series",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        year: 2016,
        duration: "4 Seasons",
        genre: "Sci-Fi Horror",
        rating: "TV-14",
        categories: ["trending", "sci-fi", "horror"],
        ranking: 1,
        progress: 75
    },
   
];

// My List for user's saved content
let myList = [];

// Helper function to get movies by category
function getMoviesByCategory(category) {
    return movies.filter(movie => movie.categories.includes(category));
}

// Helper function to get movies by type
function getMoviesByType(type) {
    return movies.filter(movie => movie.type === type);
}

// Create movie card with progress bar
function createMovieCard(movie) {
    const isInMyList = myList.includes(movie.id);
    const progressWidth = movie.progress || 0;
    
    return `
        <div class="movie-card" data-movie-id="${movie.id}">
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressWidth}%"></div>
            </div>
            <div class="movie-overlay">
                <div class="movie-actions">
                    <button class="action-btn" onclick="addToList(${movie.id})">
                        <i class="fas ${isInMyList ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                    <button class="action-btn" onclick="likeMovie(${movie.id})">
                        <i class="far fa-thumbs-up"></i>
                    </button>
                    <button class="action-btn" onclick="showDetails(${movie.id})">
                        <i class="fas fa-info"></i>
                    </button>
                </div>
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-meta">
                        <span class="rating">${movie.rating}</span>
                        <span class="duration">${movie.duration}</span>
                        <span class="genre">${movie.genre}</span>
                    </div>
                    <div class="movie-genres">${movie.categories.join(' • ')}</div>
                </div>
            </div>
        </div>
    `;
}

// Add/remove from My List
function addToList(movieId) {
    const index = myList.indexOf(movieId);
    if (index > -1) {
        myList.splice(index, 1);
    } else {
        myList.push(movieId);
    }
    
    // Save to localStorage
    localStorage.setItem('netflixMyList', JSON.stringify(myList));
    
    // Update the button icon
    const movieCard = document.querySelector(`[data-movie-id="${movieId}"]`);
    const listBtn = movieCard.querySelector('.action-btn i');
    listBtn.className = myList.includes(movieId) ? 'fas fa-check' : 'fas fa-plus';
    
    // Update My List section
    populateMyList();
}

// Like movie function
function likeMovie(movieId) {
    const movieCard = document.querySelector(`[data-movie-id="${movieId}"]`);
    const likeBtn = movieCard.querySelector('.action-btn:nth-child(2) i');
    likeBtn.classList.toggle('fas');
    likeBtn.classList.toggle('far');
}

// Show movie details modal
function showDetails(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    
    const modal = document.getElementById('detailModal');
    const modalHero = document.getElementById('modalHero');
    const modalTitle = document.getElementById('modalTitle');
    const modalBadge = document.getElementById('modalBadge');
    const modalMeta = document.getElementById('modalMeta');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');
    const modalListBtn = document.getElementById('modalList');
    const modalLikeBtn = document.getElementById('modalLike');
    
    // Set modal content
    modalHero.style.backgroundImage = `url(${movie.image})`;
    modalTitle.textContent = movie.title;
    modalBadge.textContent = movie.ranking ? `#${movie.ranking} in TV Shows Today` : movie.type.toUpperCase();
    modalMeta.innerHTML = `
        <span class="rating">${movie.rating}</span>
        <span class="year">${movie.year}</span>
        <span class="duration">${movie.duration}</span>
        <span class="genre">${movie.genre}</span>
    `;
    modalDescription.textContent = movie.description;
    modalTags.innerHTML = movie.categories.map(cat => `<span class="modal-tag">${cat}</span>`).join('');
    
    // Update modal buttons
    const isInMyList = myList.includes(movie.id);
    modalListBtn.innerHTML = `<i class="fas ${isInMyList ? 'fa-check' : 'fa-plus'}"></i> My List`;
    modalLikeBtn.innerHTML = `<i class="far fa-thumbs-up"></i> Like`;
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for modal buttons
    modalListBtn.onclick = () => {
        addToList(movie.id);
        modalListBtn.innerHTML = `<i class="fas ${myList.includes(movie.id) ? 'fa-check' : 'fa-plus'}"></i> My List`;
    };
    
    modalLikeBtn.onclick = () => {
        const icon = modalLikeBtn.querySelector('i');
        icon.classList.toggle('fas');
        icon.classList.toggle('far');
    };
}

// Close modal
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Populate movie sections
function populateSection(sectionId, movies, title) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const movieList = section.querySelector('.movie-list');
    if (movieList) {
        movieList.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
    }
}

// Populate My List section
function populateMyList() {
    const myListMovies = movies.filter(movie => myList.includes(movie.id));
    populateSection('my-list-section', myListMovies, 'My List');
}

// Filter movies for search
function filterMovies(query) {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.genre.toLowerCase().includes(searchTerm) ||
        movie.categories.some(cat => cat.toLowerCase().includes(searchTerm))
    );
}

// Update breadcrumb
function updateBreadcrumb(text) {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = text;
    }
}

// Setup sidebar search functionality
function setupSidebarSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value;
        
        searchTimeout = setTimeout(() => {
            if (query.trim()) {
                const results = filterMovies(query);
                populateSection('search-results-section', results, `Search Results for "${query}"`);
                updateBreadcrumb(`Search: "${query}"`);
                
                // Show search results section
                const searchSection = document.getElementById('search-results-section');
                if (searchSection) {
                    searchSection.style.display = 'block';
                    searchSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Hide search results when query is empty
                const searchSection = document.getElementById('search-results-section');
                if (searchSection) {
                    searchSection.style.display = 'none';
                }
                updateBreadcrumb('Home');
            }
        }, 300);
    });
}

// Populate all movie rows
function populateMovieRows() {
    // Home sections
    populateSection('trending-section', getMoviesByCategory('trending'), 'Trending Now');
    populateSection('popular-section', getMoviesByCategory('popular'), 'Popular on Netflix');
    populateSection('new-releases-section', movies.slice(0, 8), 'New Releases');
    
    // Genre sections
    populateSection('comedy-section', getMoviesByCategory('comedy'), 'Comedy');
    populateSection('thriller-section', getMoviesByCategory('thriller'), 'Thriller');
    populateSection('horror-section', getMoviesByCategory('horror'), 'Horror');
    populateSection('action-section', getMoviesByCategory('action'), 'Action');
    
    // Type sections
    populateSection('tv-shows-section', getMoviesByType('series'), 'TV Shows');
    populateSection('movies-section', getMoviesByType('movie'), 'Movies');
    
    // My List section
    populateMyList();
}

// Sidebar functionality
let sidebarTimeout;

function setupSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (!sidebar || !mainContent) return;
    
    // Desktop: hover to expand
    sidebar.addEventListener('mouseenter', () => {
        clearTimeout(sidebarTimeout);
        sidebar.classList.add('expanded');
        mainContent.classList.add('expanded');
    });
    
    sidebar.addEventListener('mouseleave', () => {
        sidebarTimeout = setTimeout(() => {
            sidebar.classList.remove('expanded');
            mainContent.classList.remove('expanded');
        }, 300);
    });
    
    // Mobile: click to toggle
    sidebar.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('expanded');
            mainContent.classList.toggle('expanded');
        }
    });
    
    // Navigation items
    const navItems = sidebar.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const navText = item.querySelector('.nav-text');
            if (navText) {
                updateBreadcrumb(navText.textContent);
                
                // Scroll to section if it exists
                const sectionId = navText.textContent.toLowerCase().replace(/\s+/g, '-') + '-section';
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('expanded');
                mainContent.classList.remove('expanded');
            }
        });
    });
}

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' from all items
    navItems.forEach(i => i.classList.remove('active'));
    // Add 'active' to the clicked item
    item.classList.add('active');
  });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load My List from localStorage
    const savedMyList = localStorage.getItem('netflixMyList');
    if (savedMyList) {
        myList = JSON.parse(savedMyList);
    }
    
    // Setup sidebar
    setupSidebar();
    
    // Setup search
    setupSidebarSearch();
    
    // Populate movie rows
    populateMovieRows();
    
    // Setup modal close
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('detailModal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Setup header buttons
    const searchBtn = document.querySelector('.header-btn[aria-label="Search"]');
    const notificationBtn = document.querySelector('.header-btn[aria-label="Notifications"]');
    const profileBtn = document.querySelector('.profile-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            // Focus on sidebar search
            const sidebarSearch = document.querySelector('.search-input');
            if (sidebarSearch) {
                sidebarSearch.focus();
            }
        });
    }
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            alert('Notifications feature coming soon!');
        });
    }
    
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            alert('Profile settings coming soon!');
        });
    }
    
    // Setup movie row controls
    const controlBtns = document.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const movieList = e.target.closest('.movie-row').querySelector('.movie-list');
            const scrollAmount = 240; // Width of one movie card
            
            if (e.target.classList.contains('control-left')) {
                movieList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else if (e.target.classList.contains('control-right')) {
                movieList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });
    
    // Setup More Info button
    const moreInfoBtn = document.querySelector('.btn-info');
    if (moreInfoBtn) {
        moreInfoBtn.addEventListener('click', () => {
            // Show details for the hero movie (Stranger Things)
            showDetails(1);
        });
    }

});

function scrollRow(button, direction) {
  // Find the row this button belongs to
  const row = button.closest(".movie-row");
  if (!row) return;

  // Find the movie-list inside this row
  const list = row.querySelector(".movie-list");
  if (!list) return;

  // Get one card's width + gap
  const card = list.querySelector(".movie-card");
  const cardWidth = card ? card.offsetWidth + 10 : 220;

  // Scroll by ~4 cards
  const scrollAmount = cardWidth * 4;
  const left = direction === "left" ? -scrollAmount : scrollAmount;

  list.scrollBy({ left, behavior: "smooth" });
}

