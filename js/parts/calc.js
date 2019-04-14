let calc = () => { 

    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        calcPrice = document.querySelector('.calc-price'),
        promocode = document.querySelector('.promocode'),
        calcForm = size.parentElement;

    let prices = {
        sizePrice: [1000, 2000, 3000, 4000],
        materialPrice: [2000, 3000, 1000],
        optionsPrice: [3000, 2000, 4000]
    };

    let totalSum = 0;

    function calc() {

        if (size.selectedIndex > 0 && material.selectedIndex > 0) {
            totalSum = prices.sizePrice[size.selectedIndex - 1] + prices.materialPrice[material.selectedIndex - 1];

            if (options.selectedIndex > 0) {
                totalSum += prices.optionsPrice[options.selectedIndex - 1];
            }

            if (promocode.value.trim().toUpperCase() === 'IWANTPOPART') {
                totalSum = totalSum * 0.7;
            }

            calcPrice.textContent = totalSum.toString();

        } else {
            calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    }

    calcForm.addEventListener('change', e => {
        if (e.target.tagName === 'SELECT') {
            calc();
        }
    });

    promocode.addEventListener('input', () => {
        calc();
    });



};
module.exports = calc;