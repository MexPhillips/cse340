// =============================================
// CSE Motors - Main Script
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '/' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Smooth scroll to sections (if needed for future anchor links)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Image loading optimization
window.addEventListener('load', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Add loaded class for any fade-in animations if needed
    img.classList.add('loaded');
  });
});
