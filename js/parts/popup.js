let popup = () => {

    let popupDesign = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupGift = document.querySelector('.popup-gift');

    document.addEventListener('click', e => {
        // e.preventDefault();
        let target = e.target;
        if (target.classList.contains('button-design')) {
            popupDesign.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        if (target.classList.contains('button-consultation')) {
            popupConsultation.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        if (target.classList.contains('fixed-gift')) {
            popupGift.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

    });

    function closeModal() {
        popupDesign.style.display = 'none';
        popupConsultation.style.display = 'none';
        popupGift.style.display = 'none';
        document.body.style.overflow = '';
    }

    document.addEventListener('click', e => {
        if (e.target.classList.contains('popup-close')) {
            closeModal();
        }
    });
    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            closeModal();
        }
    });
};

module.exports = popup;