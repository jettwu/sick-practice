export class ElObserver {
    constructor (el) {
        this.element = el;
    }

    update (model) {
        this.element.innerHTML = model.counter;
        this.element.style.backgroundColor = model.color;
    }
}