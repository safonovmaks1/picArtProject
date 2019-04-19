'use strict';

require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {

    let ajax = require('./parts/ajax');
    let popup = require('./parts/popup');
    let sliderDown = require('./parts/sliderDown');
    let accordion = require('./parts/accordion');
    let calc = require('./parts/calc');
    let filter = require('./parts/filter');

    ajax();
    popup();
    sliderDown();
    accordion();
    calc();
    filter();

});