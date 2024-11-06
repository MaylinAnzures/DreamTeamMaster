window.onload = function() {
    window.scrollTo(0, 0);
};


function showSlide(carouselId, slideIndex) {
    const carousel = document.querySelector(`#${carouselId} .carousel-slide`);
    const totalSlides = carousel.children.length;

    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Volver al primer slide
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Volver al último slide
    }

    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

    document.getElementById(carouselId).setAttribute("data-current-slide", slideIndex);
}

document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.setAttribute("data-current-slide", 0);
});



// Función para cambiar de slide
function moveSlide(carouselId, step) {
    const currentSlide = parseInt(document.getElementById(carouselId).getAttribute("data-current-slide")) || 0;
    showSlide(carouselId, currentSlide + step);
}
