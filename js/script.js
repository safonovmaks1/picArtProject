require('es6-promise').polyfill();
require('formdata-polyfill');
require('nodelist-foreach-polyfill');

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let ajax = require('./parts/ajax');

    ajax();

});