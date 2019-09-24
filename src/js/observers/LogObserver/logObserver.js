export class LogObserver {
    constructor () {
        this.colorHistory = [];
    }

    update (model) {
        model.color && this.colorHistory.push(model.color[0].toUpperCase());
        console.log(`You have clicked %c${model.counter} %ctimes`, `font-weight: bold;`, '');
        console.log(`Current color is %c${model.color}`, `color: ${model.color}`);
        console.log(`The most rescent 5 colors are: [${this.colorHistory.slice().reverse().slice(0, 5)}]`);
    }
}
