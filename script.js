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
    {
        id: 2,
        title: "The Crown",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        year: 2016,
        duration: "6 Seasons",
        genre: "Drama",
        rating: "TV-MA",
        categories: ["popular", "drama", "historical"],
        progress: 45
    },
    {
        id: 3,
        title: "Wednesday",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends at Nevermore Academy.",
        year: 2022,
        duration: "1 Season",
        genre: "Comedy Horror",
        rating: "TV-14",
        categories: ["trending", "comedy", "horror"],
        ranking: 2,
        progress: 30
    },
    {
        id: 4,
        title: "Bridgerton",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.",
        year: 2020,
        duration: "3 Seasons",
        genre: "Romance Drama",
        rating: "TV-MA",
        categories: ["popular", "romance", "drama"],
        progress: 60
    },
    {
        id: 5,
        title: "The Witcher",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        year: 2019,
        duration: "3 Seasons",
        genre: "Fantasy Action",
        rating: "TV-MA",
        categories: ["trending", "fantasy", "action"],
        progress: 85
    },
    {
        id: 6,
        title: "Money Heist",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
        year: 2017,
        duration: "5 Parts",
        genre: "Crime Drama",
        rating: "TV-MA",
        categories: ["popular", "crime", "thriller"],
        progress: 90
    },
    {
        id: 7,
        title: "The Queen's Gambit",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.",
        year: 2020,
        duration: "1 Season",
        genre: "Drama",
        rating: "TV-MA",
        categories: ["popular", "drama"],
        progress: 100
    },
    {
        id: 8,
        title: "Dark",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
        year: 2017,
        duration: "3 Seasons",
        genre: "Sci-Fi Thriller",
        rating: "TV-MA",
        categories: ["trending", "sci-fi", "thriller"],
        progress: 20
    },
    {
        id: 9,
        title: "Ozark",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
        year: 2017,
        duration: "4 Seasons",
        genre: "Crime Drama",
        rating: "TV-MA",
        categories: ["popular", "crime", "drama"],
        progress: 70
    },
    {
        id: 10,
        title: "The Umbrella Academy",
        type: "series",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "On one day in 1989, forty-three infants are inexplicably born to random, unconnected women who showed no signs of pregnancy the day before.",
        year: 2019,
        duration: "3 Seasons",
        genre: "Sci-Fi Action",
        rating: "TV-14",
        categories: ["trending", "sci-fi", "action"],
        progress: 55
    },
    {
        id: 11,
        title: "The Irishman",
        type: "movie",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family.",
        year: 2019,
        duration: "3h 29m",
        genre: "Crime Drama",
        rating: "R",
        categories: ["popular", "crime", "drama"],
        progress: 0
    },
    {
        id: 12,
        title: "Marriage Story",
        type: "movie",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        year: 2019,
        duration: "2h 17m",
        genre: "Drama Romance",
        rating: "R",
        categories: ["popular", "drama", "romance"],
        progress: 0
    }
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


