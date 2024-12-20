document.addEventListener("DOMContentLoaded", () => {
    const images = ["Medien/01.jpg", "Medien/02.jpg", "Medien/03.jpg", "Medien/04.jpg", "Medien/05.jpg", "Medien/06.jpg", "Medien/07.jpg", "Medien/08.jpg", "Medien/09.jpg", "Medien/10.jpg", "Medien/11.jpg", "Medien/12.jpg", "Medien/13.jpg", "Medien/14.jpg"]; // Update with all your image paths
    let currentIndex = 0;
    const slideElement = document.getElementById("slideshow");
  
    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  
    function showNextImage() {
      // Fade out
      slideElement.style.opacity = 0;
  
      setTimeout(() => {
        // Update image and fade in
        currentIndex = (currentIndex + 1) % images.length;
        slideElement.src = images[currentIndex];
        slideElement.style.opacity = 1;
      }, 500); // Fade out duration
    }
  
    // Start the slideshow
    slideElement.src = images[currentIndex]; // Set the initial image
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  });
  
