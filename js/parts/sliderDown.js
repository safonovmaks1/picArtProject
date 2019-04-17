let sliderDown = () => { 

    let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');
        
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => { 
            item.style.display = 'none';
        });
        if (slideIndex > slides.length) { 
            slideIndex = 1; 
        }
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add('animated');
        slides[slideIndex - 1].classList.add('slideInRight');
    }


    function autoSlides() {
        slides.forEach((item) => {
            item.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) { 
            slideIndex = 1; 
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add('animated', 'slideInRight');

        setTimeout(autoSlides, 5000); // Change image every 2 seconds
    }
    autoSlides();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    prev.addEventListener('click', () => {
        plusSlides(-1);
        slides[slideIndex - 1].classList.remove('slideInRight');
        slides[slideIndex - 1].classList.add('slideInLeft');

    });
    next.addEventListener('click', () => {
        plusSlides(1);
        slides[slideIndex - 1].classList.remove('slideInLeft');
        slides[slideIndex - 1].classList.add('slideInRight');

    });

};

module.exports = sliderDown;