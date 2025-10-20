export class Subject {
    constructor() {
        this.observers = [];
    }

    // Tilmeld observer
    attach(observer) {
        this.observers.push(observer);
    }

    // Fjern observer
    detach(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    //notify alle observers
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}
