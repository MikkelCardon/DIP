
class Observer {
    update(data) {
        throw new Error("update() skal implementeres i subklassen");
    }
}

//kun ud til konsolen
export class ConsoleObserver extends Observer {
    update(data) {
        console.log(`Console observer modtog: ${data}`);
    }
}

//gemmer i en liste
export class MemoryObserver extends Observer {
    constructor() {
        super();
        this.memory = [];
    }

    update(data) {
        this.memory.push(data);
        console.log(`Memory observer lagrede: ${data}`);
    }
}