document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 1158) {
    const container = document.querySelector(".samew.productHeading");

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener("mousedown", (e) => {
      isDown = true;
      container.classList.add("active");
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", () => {
      isDown = false;
      container.classList.remove("active");
    });

    container.addEventListener("mouseup", () => {
      isDown = false;
      container.classList.remove("active");
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  }
});

// section slider starts

// const sliderImages = document.querySelector(".slider_image");
// const images = document.querySelectorAll(".slider_image img");
// const leftArrow = document.querySelector(".arrow-btn1");
// const rightArrow = document.querySelector(".arrow-btn2");

// let currentIndex = 0;

// // Calculate each image width instead of the container width
// function getSlideWidth() {
//   return images[0].clientWidth;
// }

// // Move to the next slide
// function nextSlide() {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateSliderPosition();
// }

// // Move to the previous slide
// function prevSlide() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateSliderPosition();
// }

// // Update the position of the slider
// function updateSliderPosition() {
//   const slideWidth = getSlideWidth();
//   sliderImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }

// // Event listeners for arrow buttons
// rightArrow.addEventListener("click", nextSlide);
// leftArrow.addEventListener("click", prevSlide);

// // Adjust slide width on window resize
// window.addEventListener("resize", updateSliderPosition);

// if(window.size<=1000px){
//   setInterval(nextSlide, 1000);
// }

const sliderImages = document.querySelector('.slider_image');
const images = document.querySelectorAll('.slider_image img');
const leftArrow = document.querySelector('.arrow-btn1');
const rightArrow = document.querySelector('.arrow-btn2');

let currentIndex = 0;
let autoSlideInterval; // To store the setInterval reference

// Function to calculate the width of each slide (image)
function getSlideWidth() {
  return images[0].clientWidth;
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSliderPosition();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSliderPosition();
}

// Update the position of the slider container
function updateSliderPosition() {
  const slideWidth = getSlideWidth();
  sliderImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for arrow buttons
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Function to start automatic sliding
function startAutoSlide() {
  if (!autoSlideInterval) { // Only start if not already running
    autoSlideInterval = setInterval(nextSlide, 1000);
  }
}

// Function to stop automatic sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
}

// Check window size on load and resize, and adjust auto-sliding accordingly
function checkWindowSize() {
  if (window.innerWidth <= 1000) {
    startAutoSlide();
  } else {
    stopAutoSlide();
  }
}

// Initial check on page load
checkWindowSize();

// Add resize event listener to check window size dynamically
window.addEventListener('resize', checkWindowSize);

// Adjust slide width on window resize
window.addEventListener('resize', updateSliderPosition);


// section slider ends
