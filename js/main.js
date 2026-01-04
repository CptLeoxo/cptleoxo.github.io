// ==========================================
// GENERATE STARFIELD
// ==========================================

// Get the stars container from HTML
const starsContainer = document.getElementById('stars');

// Create 100 stars with random positions
for (let i = 0; i < 100; i++) {
    // Create a new div element
    const star = document.createElement('div');
    
    // Add the 'star' class to it
    star.className = 'star';
    
    // Random horizontal position (0-100%)
    star.style.left = Math.random() * 100 + '%';
    
    // Random vertical position (0-100%)
    star.style.top = Math.random() * 100 + '%';
    
    // Random animation delay (0-3 seconds)
    // This makes stars twinkle at different times
    star.style.animationDelay = Math.random() * 3 + 's';
    
    // Add the star to the container
    starsContainer.appendChild(star);
}


// ==========================================
// SMOOTH SCROLLING FOR NAVIGATION
// ==========================================

// Find all links that start with # (internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    // When clicked...
    anchor.addEventListener('click', function (e) {
        // Prevent default jump behavior
        e.preventDefault();
        
        // Get the target section
        const target = document.querySelector(this.getAttribute('href'));
        
        // If target exists, smoothly scroll to it
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth'  // Smooth animation
            });
        }
    });
});


// ==========================================
// ADDITIONAL FEATURE IDEAS (commented out)
// ==========================================

// You could add:
// - Dark/light mode toggle
// - Loading animation
// - Scroll-triggered animations
// - Typing effect for the hero text
// - Contact form validation