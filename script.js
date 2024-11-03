document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 600) {
      const container = document.querySelector('.samew.productHeading');
      
      let isDown = false;
      let startX;
      let scrollLeft;
  
      container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
  
      container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
      });
  
      container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
      });
  
      container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        container.scrollLeft = scrollLeft - walk;
      });
  
      container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
  
      container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
      });
    }
  });
  