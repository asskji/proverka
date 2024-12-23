let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function autoSlide() {
    moveSlide(1);
}

let slideInterval = setInterval(autoSlide, 3000);

// Остановка автопРОДВИЖЕНИЯ при наведении на слайдер
document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.slider').addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 3000);
});

// Инициализация первого слайда
showSlide(currentIndex);