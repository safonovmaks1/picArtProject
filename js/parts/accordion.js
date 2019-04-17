let accordion = () => {
  
    let accordion = document.querySelector('#accordion'),
        titles = document.querySelectorAll('.accordion-heading'), 
        blocks = document.querySelectorAll('.accordion-block');

    function hideBlock(a) {
            titles[a].style.color = '';
            blocks[a].style.display = 'none';
            blocks[a].classList.remove('animated', 'fadeInDown');

    }

    function showBlock(b) {
            titles[b].style.color = '#c51abb';
            blocks[b].style.display = 'block';
            blocks[b].classList.add('animated', 'fadeInDown');
    }

    [].forEach.call(blocks, (el, i) => {
        if (i === 0) {
            showBlock(i);
        } else {
            hideBlock(i);
        }
    });

    accordion.addEventListener('click', e => {
        if (e.target.parentElement.classList.contains('accordion-heading')) {
            [].forEach.call(titles, (el, i) => {
                if (el === e.target.parentElement) {
                    showBlock(i);
                } else {
                    hideBlock(i);
                }
            });
        }
    });

};

module.exports = accordion;