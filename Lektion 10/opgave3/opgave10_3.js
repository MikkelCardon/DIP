import { ConsoleObserver, MemoryObserver } from "./observer.js";
import { Subject} from "./subject.js";

const subject = new Subject();

const consoleObs = new ConsoleObserver();
const memoryObs = new MemoryObserver();

subject.attach(consoleObs);
subject.attach(memoryObs);

subject.notify("Hej verden!");
subject.notify("Ny besked!");
