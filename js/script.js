require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let ajax = require('./parts/ajax');
    let popup = require('./parts/popup');
    let sliderDown = require('./parts/sliderDown');
    let accordion  = require('./parts/accordion');
    let calc  = require('./parts/calc');

    ajax();
    popup();
    sliderDown();
    accordion();
    calc();

});