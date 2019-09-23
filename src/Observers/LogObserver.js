import Observable from '../Observable/SquareObservable';

export default class LogObserver {
    constructor () {
        this.colorHistory = [];
        this.showNumberOfHistory = 5;
    }

    update (model) {
        this.colorHistory.push(model.color[0].toUpperCase());

        console.log(`You have clicked button ${model.counter} time${model.counter > 1 ? 's' : ''}.`);
        console.log(`The current color is %c${model.color}`, `color: ${model.color}`);
        console.log(`Most rescent ${this.showNumberOfHistory} colors are: [${this.getColor()}]`);
    }

    getColor () {
        return this.colorHistory.slice().reverse().slice(0, 5);
    }
}
