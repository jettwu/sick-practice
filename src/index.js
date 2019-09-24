import { SquareObservable as Model } from './js/observables';
import { ElObserver, LogObserver } from './js/observers';
import './styles/main.scss';

function createElement (type, id) {
    const el = document.createElement(type);
    el.setAttribute('id', id);
    return el
}

const square = createElement('div', 'square');
const btn = createElement('button', 'btn');

const model = new Model();
const elOb = new ElObserver(square);
const logOb = new LogObserver();

model.subscribe(elOb, logOb);

btn.innerHTML = 'Click';
btn.onclick = model.increment.bind(model);

document.body.appendChild(square);
document.body.appendChild(btn);
