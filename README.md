# Netflix Clone - HTML/CSS/JavaScript

A beautiful, responsive Netflix clone built with vanilla HTML, CSS, and JavaScript. This project features a modern UI that closely resembles the Netflix interface with smooth animations and interactive elements.

## Features

- 🎬 **Hero Section**: Featured movie with background image and call-to-action buttons
- 📺 **Movie Rows**: Horizontal scrollable movie categories (Trending, Popular, New Releases)
- 🎭 **Interactive Movie Cards**: Hover effects with play, add to list, and like buttons
- 🎨 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🌙 **Dark Theme**: Netflix-inspired dark color scheme
- ⚡ **Smooth Animations**: CSS transitions and hover effects
- 🔍 **Search Functionality**: Header search button (placeholder)
- 👤 **User Interface**: Profile and notification buttons
- 📱 **Mobile Optimized**: Responsive design for all screen sizes

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation

1. Download or clone the repository
2. Open `index.html` in your web browser
3. That's it! The Netflix clone is ready to use

### Alternative: Using a Local Server

For the best experience, you can run it on a local server:

1. **Using Python (if installed):**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js (if installed):**
   ```bash
   npx http-server
   ```

3. **Using Live Server (VS Code extension):**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

Then open your browser and navigate to `http://localhost:8000`

## Project Structure

```
netflix-clone/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Features Explained

### Hero Section
- Full-screen background image with gradient overlay
- Featured movie information (title, rating, year, duration, genre)
- Play and More Info buttons with hover effects

### Movie Rows
- Three categories: Trending Now, Popular on Netflix, New Releases
- Horizontal scrolling with arrow controls
- Smooth scroll animations

### Movie Cards
- Hover effects with scale transformation
- Overlay with movie information
- Interactive buttons (Play, Add to List, Like)
- Responsive sizing for different screen sizes

### Header
- Fixed navigation with scroll effect
- Netflix logo and navigation menu
- Search, notifications, and profile buttons
- Transparent to solid background transition on scroll

## Customization

### Adding New Movies

Edit the `movies` array in `script.js`:

```javascript
{
    id: 11,
    title: "Your Movie Title",
    description: "Movie description here...",
    year: 2024,
    rating: "TV-MA",
    duration: "2h 15m",
    genre: ["Action", "Drama"],
    image: "your-image-url.jpg"
}
```

### Changing Colors

Modify the CSS custom properties in `styles.css`:

```css
:root {
    --netflix-red: #E50914;
    --netflix-black: #141414;
    --netflix-dark: #000000;
    --netflix-gray: #808080;
    --netflix-light-gray: #E5E5E5;
}
```

### Adding New Movie Rows

1. Add a new section in `index.html`:
```html
<section class="movie-row">
    <div class="row-header">
        <h2 class="row-title">Your Category</h2>
        <div class="row-controls">
            <button class="control-btn" onclick="scrollRow('your-category', 'left')">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="control-btn" onclick="scrollRow('your-category', 'right')">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
    <div class="movie-list" id="your-category">
        <!-- Movies will be populated by JavaScript -->
    </div>
</section>
```

2. Update the `populateMovieRows()` function in `script.js` to include your new category.

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized images with responsive sizing
- CSS animations using transform and opacity for smooth performance
- Efficient JavaScript event handling
- Minimal external dependencies

## Future Enhancements

- [ ] Video player integration
- [ ] User authentication system
- [ ] Movie details modal
- [ ] Search functionality with real results
- [ ] User watchlist persistence
- [ ] Rating and review system
- [ ] Backend API integration
- [ ] Database integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Netflix for the design inspiration
- Unsplash for the placeholder images
- Font Awesome for the icons
- Google Fonts for typography

## Support

If you encounter any issues or have questions, please open an issue on the repository or contact the maintainers.

---

**Note**: This is a frontend-only clone for educational purposes. It does not include actual video streaming functionality or real Netflix content.

