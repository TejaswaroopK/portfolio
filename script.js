// Project Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselTrack = document.querySelector('.carousel-track');
    let currentIndex = 0;

    // Function to update the carousel
    function updateCarousel(index) {
        // Remove active class from all cards and indicators
        projectCards.forEach(card => card.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current card and indicator
        projectCards[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Smooth slide animation
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        
        currentIndex = index;
    }

    // Next button event listener
    nextBtn.addEventListener('click', function() {
        let nextIndex = (currentIndex + 1) % projectCards.length;
        updateCarousel(nextIndex);
    });

    // Previous button event listener
    prevBtn.addEventListener('click', function() {
        let prevIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
        updateCarousel(prevIndex);
    });

    // Indicator click event listeners
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCarousel(index);
        });
    });

    // Auto-advance carousel (optional)
    let autoAdvance = setInterval(() => {
        let nextIndex = (currentIndex + 1) % projectCards.length;
        updateCarousel(nextIndex);
    }, 5000); // Change slide every 5 seconds

    // Pause auto-advance on hover
    const carousel = document.querySelector('.projects-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(() => {
            let nextIndex = (currentIndex + 1) % projectCards.length;
            updateCarousel(nextIndex);
        }, 5000);
    });
});