export default class SquareObservable {
    constructor () {
        this.counter = 0;
        this.color = 'red';
        this.oberservers = [];
    }

    register (...o) {
        this.oberservers.push(...o);
    }

    unsubscribe (...o) {
        this.oberservers = this.oberservers.filter(ob => {
            return ![...o].includes(ob);
        });
    }

    notifyObservers () {
        this.oberservers.forEach(o => {
            o.update(this);
        })
    }

    increment () {
        const COLOR = ['red', 'blue', 'green', 'yellow', 'brown', 'orange', 'pink', 'grey', 'purple'];
        this.counter++;
        this.color = COLOR[Math.floor(Math.random() * COLOR.length)];

        this.notifyObservers();
    }
}
