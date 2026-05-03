
let movies = [];
let myList = JSON.parse(localStorage.getItem('eduflix_mylist') || '[]');

// ── HELPERS ─────────────────────────────────────────────
function getByCategory(cat) {
  return movies.filter(m => m.categories.includes(cat));
}
function getByType(type) {
  return movies.filter(m => m.type === type);
}

function renderHero(movies) {
  const hero = movies.find(m => m.ranking === 1) || movies[0];

  const title = document.querySelector(".hero-title");
  const desc = document.querySelector(".hero-description");
  const type = document.querySelector(".hero-type");
  const img = document.querySelector(".hero-img");
  const rating = document.querySelector(".rating");
  const year = document.querySelector(".year");
  const duration = document.querySelector(".duration");
  const genre = document.querySelector(".genre");

  if (title) title.textContent = hero.title;
  if (desc) desc.textContent = hero.description;
  if (type) type.textContent = hero.type.toUpperCase();
  if (img) img.src = hero.image;
  if (rating) rating.textContent = hero.rating;
  if (year) year.textContent = hero.year;
  if (duration) duration.textContent = hero.duration;
  if (genre) genre.textContent = hero.genre;

  // ── BACKGROUND VIDEO FIX ──
  const video  = document.getElementById('heroVideo');
  const source = video?.querySelector('source');

  const bgVideo = hero?.trailer?.local || null;

  if (bgVideo && video && source) {
    source.src = bgVideo;
    video.load();

    video.style.display = 'block';

    video.play().catch(() => {
      // autoplay may fail on some browsers
    });
  } else if (video) {
    video.style.display = 'none';
  }

  // optional: make buttons dynamic
  const infoBtn = document.querySelector(".btn-info");
  if (infoBtn) {
    infoBtn.onclick = () => {
      showDetails(hero.id); 
    };
  }
  const playBtn = document.querySelector(".btn-play");
  if (playBtn) {
    playBtn.onclick = () => {
      window.location.href = `preview.html?id=${hero.id}`;
    };
  }
}
// ── CARD FACTORY ────────────────────────────────────────
function createMovieCard(movie) {
  const inList = myList.includes(movie.id);

  const progressBar = movie.progress
    ? `<div class="progress-bar">
         <div class="progress-fill" style="width:${movie.progress}%"></div>
       </div>`
    : '';

  return `
    <div class="movie-card" data-movie-id="${movie.id}">

      <img src="${movie.image}" alt="${movie.title}" class="movie-image"
           onerror="this.src='images/fallback.jpg'">

      ${progressBar}

      <!-- CENTER PLAY BUTTON -->
      <div class="overlay-center">
        <button class="play-btn"
          onclick="event.stopPropagation(); window.location.href='preview.html?id=${movie.id}'">
          ▶
        </button>
      </div>

      <!-- BOTTOM INFO BUTTON -->
      <div class="overlay-bottom">
        <button class="info-btn"
          onclick="event.stopPropagation(); showDetails(${movie.id})">
          More Info
        </button>
      </div>

      <!-- EXISTING OVERLAY (keep your actions too if you want) -->
      <div class="movie-overlay">
        <div class="movie-actions">
          <button class="action-btn" onclick="event.stopPropagation(); addToList(${movie.id})">
            <i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i>
          </button>
          <button class="action-btn" onclick="event.stopPropagation(); likeMovie(${movie.id})">
            <i class="far fa-thumbs-up"></i>
          </button>
          <button class="action-btn" onclick="event.stopPropagation(); showDetails(${movie.id})">
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

    </div>`;
}

// ── POPULATE — targets the direct list div by its id ────
// listId = the id on the <div class="movie-list"> element
function populateList(listId, items) {
  const el = document.getElementById(listId);
  if (!el) return;

  const limitedItems = items.slice(0, 12); 

  el.innerHTML = limitedItems.length
    ? limitedItems.map(createMovieCard).join('')
    : '<p style="color:#888;padding:20px;font-size:0.9rem">Nothing here yet.</p>';
}

// ── MY LIST ─────────────────────────────────────────────
function saveMyList() {
  localStorage.setItem('eduflix_mylist', JSON.stringify(myList));
}

function addToList(movieId) {
  const idx = myList.indexOf(movieId);
  idx > -1 ? myList.splice(idx, 1) : myList.push(movieId);
  saveMyList();

  // update icon on all visible cards with this id
  document.querySelectorAll(`[data-movie-id="${movieId}"]`).forEach(card => {
    const icon = card.querySelector('.action-btn:first-child i');
    if (icon) icon.className = `fas ${myList.includes(movieId) ? 'fa-check' : 'fa-plus'}`;
  });

  populateMyList();
}

function likeMovie(movieId) {
  const cards = document.querySelectorAll(`[data-movie-id="${movieId}"]`);
  cards.forEach(card => {
    const icons = card.querySelectorAll('.action-btn i');
    if (icons[1]) {
      icons[1].classList.toggle('far');
      icons[1].classList.toggle('fas');
    }
  });
}

function populateMyList() {
  const myListMovies = movies.filter(m => myList.includes(m.id));
  const el = document.getElementById('mylist');
  if (!el) return;
  el.innerHTML = myListMovies.length
    ? myListMovies.map(createMovieCard).join('')
    : `<p style="color:#888;padding:20px;font-size:0.9rem">
        Add titles by clicking <i class="fas fa-plus"></i> on any card.
      </p>`;
}

// ── MODAL ───────────────────────────────────────────────
function showDetails(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;

  const g = id => document.getElementById(id);

  const modal    = g('detailModal');
  const heroEl   = g('modalHero');
  const titleEl  = g('modalTitle');
  const badgeEl  = g('modalBadge');
  const metaEl   = g('modalMeta');
  const descEl   = g('modalDescription');
  const tagsEl   = g('modalTags');
  const listBtn  = g('modalList');
  const likeBtn  = g('modalLike');
  const playBtn  = g('modalPlay'); 

  if (playBtn) {
    playBtn.onclick = () => {
      window.location.href = `preview.html?id=${movie.id}`;
    };
  }
  if (heroEl)  heroEl.style.backgroundImage = `url(${movie.image})`;
  if (titleEl) titleEl.textContent = movie.title;
  if (badgeEl) badgeEl.textContent = movie.ranking ? `#${movie.ranking} in TV Shows Today` : movie.type.toUpperCase();
  if (metaEl)  metaEl.innerHTML = `
    <span class="rating">${movie.rating}</span>
    <span class="year">${movie.year}</span>
    <span class="duration">${movie.duration}</span>
    <span class="genre">${movie.genre}</span>`;
  if (descEl)  descEl.textContent = movie.description;
  if (tagsEl)  tagsEl.innerHTML = movie.categories.map(c => `<span class="modal-tag">${c}</span>`).join('');

  if (listBtn) {
    listBtn.innerHTML = `<i class="fas ${myList.includes(movie.id) ? 'fa-check' : 'fa-plus'}"></i> My List`;
    listBtn.onclick = () => {
      addToList(movie.id);
      listBtn.innerHTML = `<i class="fas ${myList.includes(movie.id) ? 'fa-check' : 'fa-plus'}"></i> My List`;
    };
  }

  if (likeBtn) {
    likeBtn.innerHTML = `<i class="far fa-thumbs-up"></i> Like`;
    likeBtn.onclick = () => {
      const icon = likeBtn.querySelector('i');
      const liked = icon.classList.contains('fas');
      likeBtn.innerHTML = `<i class="${liked ? 'far' : 'fas'} fa-thumbs-up"></i> ${liked ? 'Like' : 'Liked'}`;
    };
  }

  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function closeModal() {
  const modal = document.getElementById('detailModal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ── SEARCH ──────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('sidebarSearch');
  if (!input) return;
  let timer;

  input.addEventListener('input', e => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const q         = e.target.value.trim();
      const searchRow  = document.getElementById('searchRow');
      const searchList = document.getElementById('searchResults');

      if (q) {
        const q2 = q.toLowerCase();
        const results = movies.filter(m =>
          m.title.toLowerCase().includes(q2) ||
          m.genre.toLowerCase().includes(q2) ||
          m.categories.some(c => c.toLowerCase().includes(q2))
        );
        if (searchList) searchList.innerHTML = results.length
          ? results.map(createMovieCard).join('')
          : `<p style="color:#888;padding:20px">No results for "${q}"</p>`;
        if (searchRow) searchRow.style.display = 'block';
        updateBreadcrumb(`Search: "${q}"`);
      } else {
        if (searchRow) searchRow.style.display = 'none';
        updateBreadcrumb('Home');
      }
    }, 300);
  });
}

function updateBreadcrumb(text) {
  const bc = document.querySelector('.breadcrumb');
  if (bc) bc.textContent = text;
}

// ── SIDEBAR ─────────────────────────────────────────────
let sidebarTimeout;
function setupSidebar() {
  const sidebar     = document.getElementById('sidebar');
  const mainContent = document.querySelector('.main-content');
  if (!sidebar || !mainContent) return;

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

  if (window.innerWidth <= 768) {
    sidebar.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
      mainContent.classList.toggle('expanded');
    });
  }
}

function setupNavItems() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const label = item.querySelector('.nav-text');
      if (label) updateBreadcrumb(label.textContent.trim());
    });
  });
}

// ── SCROLL & FADES ──────────────────────────────────────
function scrollRow(button, direction) {
  const row  = button.closest('.movie-row');
  if (!row) return;
  const list = row.querySelector('.movie-list');
  if (!list) return;
  const card = list.querySelector('.movie-card');
  const cardWidth = card ? card.offsetWidth + 10 : 220;
  list.scrollBy({ left: direction === 'left' ? -(cardWidth * 4) : cardWidth * 4, behavior: 'smooth' });
}

function updateFades(row) {
  const list      = row.querySelector('.movie-list');
  const fadeLeft  = row.querySelector('.row-fade.left');
  const fadeRight = row.querySelector('.row-fade.right');
  if (!list || !fadeLeft || !fadeRight) return;
  fadeLeft.style.opacity  = list.scrollLeft > 0 ? '1' : '0';
  fadeRight.style.opacity = list.scrollLeft < (list.scrollWidth - list.clientWidth - 5) ? '1' : '0';
}

function initRowFades() {
  document.querySelectorAll('.movie-row').forEach(row => {
    const list = row.querySelector('.movie-list');
    if (!list) return;
    updateFades(row);
    list.addEventListener('scroll', () => updateFades(row));
  });
}

// ── HERO VIDEO ──────────────────────────────────────────
function setupHeroVideo() {
  const video    = document.getElementById('heroVideo');
  const fallback = document.getElementById('heroFallback');
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;

  if (isMobile) {
    if (video)    video.style.display    = 'none';
    if (fallback) fallback.style.display = 'block';
    return;
  }
  if (video) {
    video.addEventListener('canplay', () => { if (fallback) fallback.style.display = 'none'; });
    video.addEventListener('error',   () => { if (fallback) fallback.style.display = 'block'; });
  }
}

// ── PROMO ROTATOR ───────────────────────────────────────
function setupPromos() {
  const promos = document.querySelectorAll('.promo');
  if (!promos.length) return;
  let current = 0;
  setInterval(() => {
    promos[current].classList.remove('active');
    current = (current + 1) % promos.length;
    promos[current].classList.add('active');
  }, 8000);
}

// ── POPULATE ALL ROWS ───────────────────────────────────
// These IDs match the <div class="movie-list" id="..."> in your main.html exactly
function populateAllRows() {
  populateList('trending',  getByCategory('trending'));
  populateList('popular',   getByCategory('popular'));
  populateList('new',       getByCategory('drama')); // only if "drama" exists

  populateList('tvshows',   getByType('series'));
  populateList('movies',    getByType('movie'));

  populateList('comedy',    getByCategory('comedy'));
  populateList('thriller',  getByCategory('thriller'));
  populateList('horror',    getByCategory('horror'));
  populateList('action',    getByCategory('action'));

  populateMyList();
}

// ── BOOT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {

  // Try loading movies.json from multiple paths (handles files/ subfolder etc.)
  const paths = ['movies.json', 'files/movies.json', 'files/movies.json', 'files/movies.json'];
  for (const path of paths) {
    try {
      const res = await fetch(path);
      if (!res.ok) continue;
      const data = await res.json();
      if (data.movies && data.movies.length) {
        movies = data.movies;
        console.log(' Loaded movies from:', path);
        break;
      }
    } catch (e) { /* try next path */ }
  }

  if (!movies.length) {
    console.error(' Could not load movies.json. Check the file path.');
    return;
  }

  setupSidebar();
  setupNavItems();
  setupSearch();
  setupHeroVideo();
  setupPromos();
  populateAllRows();
  initRowFades();
  renderHero(movies);

  // Modal close
  const modalClose = document.getElementById('modalClose');
  const modal      = document.getElementById('detailModal');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  // Hero More Info button → show details for movie id 1


  // Header buttons
  const notifBtn   = document.querySelector('.header-btn');
  const profileBtn = document.querySelector('.profile-btn');
  if (notifBtn)   notifBtn.addEventListener('click',   () => alert('Notifications coming soon!'));
  if (profileBtn) profileBtn.addEventListener('click', () => alert('Profile settings coming soon!'));
});
function getMovieIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}