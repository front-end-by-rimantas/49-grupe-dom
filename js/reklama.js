import { ads } from './ads/ads.js';

const resetDOM = document.querySelector('button');
const adsDOM = document.getElementById('ad');
const closeDOM = adsDOM.querySelector('.close');

closeDOM.addEventListener('click', () => {
    adsDOM.classList.add('hide');
});

resetDOM.addEventListener('click', () => {
    adsDOM.classList.remove('hide');
});

// 3.14 - pee