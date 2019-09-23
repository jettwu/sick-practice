import Observable from './Observable/SquareObservable';
import ElObserver from './Observers/ElObserver';
import LogObserver from './Observers/LogObserver';

import './styles/app.css';

function createElement (type, id) {
    const div = document.createElement(type);
    div.setAttribute('id', id);
    return div
}

const squareDiv = createElement('div', 'square');
const btn = createElement('button', 'btn');

const observable = new Observable();
const elObserver = new ElObserver(squareDiv);
const logObserver = new LogObserver();

observable.register(elObserver, logObserver);

btn.onclick = observable.increment.bind(observable);

document.body.appendChild(squareDiv);
document.body.appendChild(btn);
