let accordion = () => {
  
    let accordion = document.querySelector('#accordion'), // info 
        titles = document.querySelectorAll('.accordion-heading'), // tab
        blocks = document.querySelectorAll('.accordion-block'); // tabcon

    function hideBlock(a) {
            titles[a].style.color = '';
            blocks[a].style.display = 'none';
    }

    function showBlock(b) {
            titles[b].style.color = '#c51abb';
            blocks[b].style.display = 'block';
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