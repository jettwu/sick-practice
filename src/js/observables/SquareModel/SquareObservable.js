import { COLOR } from './constant';

export class SquareObservable {
    constructor () {
        this.counter = 0;
        this.color = 'red';
        this.observers = [];
    }

    subscribe (...o) {
        this.observers.push(...o);
    }

    unsubscribe (...o) {
        this.observers = this.observers.filter(_o => ![...o].includes(_o));
    }

    notify () {
        this.observers.forEach(o => {
            o.update && o.update(this)
        })
    }

    increment () {
        this.counter++;
        this.color = COLOR[Math.floor(Math.random() * COLOR.length)];

        this.notify()
    }
}
