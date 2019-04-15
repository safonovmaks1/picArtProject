let filter = () => {

    let portfolioSection = document.querySelector('#portfolio'),
        portfolioBlocks = portfolioSection.getElementsByClassName('portfolio-block'),
        portfolioMenu = portfolioSection.getElementsByClassName('portfolio-menu')[0],
        portfolioMenuItems = portfolioMenu.getElementsByTagName('LI');

    portfolioMenu.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {

            [].forEach.call(portfolioMenuItems, elem => {
                if (elem === e.target) {
                    if (e.target.classList.contains('active')) {
                        return; 
                    }
                    if (elem.classList.value === 'grandmother' || elem.classList.value === 'granddad') {
                        portfolioBlocks[0].parentElement.style.display = 'none';
                        portfolioSection.getElementsByClassName('portfolio-no')[0].style.display = 'block';
                    } else {
                        portfolioBlocks[0].parentElement.style.display = '';
                        portfolioSection.getElementsByClassName('portfolio-no')[0].style.display = '';
                    }

                    [].forEach.call(portfolioBlocks, i => {
                        if (i.classList.contains(elem.classList.value)) {
                            i.style.display = '';
                        } else {
                            i.style.display = 'none';
                        }
                    });

                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            });
        }
    });

};

module.exports = filter;