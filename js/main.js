console.log('Labas rytas, Lietuva!');

// const h1DOM = document.getElementById();
// const h1DOM = document.getElementsByClassName();
const h1DOM = document.getElementsByTagName('h1');

console.log(h1DOM[0]);
console.log('"' + h1DOM[0].textContent + '"');
h1DOM[0].textContent = '    Paskutinis "antradienis" :(   ';

h1DOM[0].innerText = '    Paskutinis "pirmadienis" :(   ';
console.log('"' + h1DOM[0].textContent + '"');

// vienkartine
setTimeout(() => {
    console.log('LAIKAS - 1');
}, 3000);


const clockDOM = document.getElementById('clock');

clockDOM.innerText = '0:00';

// daugkartine
let i = 0;
setInterval(() => {
    i++;
    const s = i % 60;
    const m = (i - s) / 60;

    clockDOM.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}, 1000);


const titleDOM = document.getElementsByTagName('title');

let count = 0;
setInterval(() => {
    count++;
    console.log('count');

    if (count % 2 === 0) {
        titleDOM[0].innerText = 'DOM';
    } else {
        titleDOM[0].innerText = '***New Message***';
    }
}, 500);

