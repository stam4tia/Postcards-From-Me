document.querySelectorAll(".flip-container").forEach((container) => {
    container.addEventListener("mouseenter", () => {
        container.querySelector(".front").style.opacity = "0";
        container.querySelector(".back").style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
        container.querySelector(".front").style.opacity = "1";
        container.querySelector(".back").style.opacity = "0";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    const slideshowContainer = document.querySelector(".slideshow-container");
    const slideWidth = slides[0].offsetWidth;  

    // function to show the slide by adjusting the transform
    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length; // loop through slides
        const newTransformValue = -currentSlide * slideWidth;  
        slideshowContainer.style.transform = `translateX(${newTransformValue}px)`;  // apply the transformation
    }

    // bind click events for arrows
    document.querySelector(".prev").addEventListener("click", function() {
        changeSlide(-1); 
    });

    document.querySelector(".next").addEventListener("click", function() {
        changeSlide(1); 
    });
});
