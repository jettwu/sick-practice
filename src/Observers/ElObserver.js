import Observerable from '../Observable/SquareObservable';

export default class ElObserver {
    constructor (element) {
        this.el = element
    }

    update (model) {
        this.el.innerHTML = model.counter;
        this.el.style.backgroundColor = model.color;
    }
}
