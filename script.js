document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 600) {
      const container = document.querySelector('.samew.productHeading');
      
      let startX;
      let scrollLeft;
  
      // For touch events
      container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
  
      container.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent default vertical scrolling
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed as needed
        container.scrollLeft = scrollLeft - walk;
      });
    }
  });
  